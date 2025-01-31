import { useEffect, useRef, useState } from "react";
import "./experience.css";
import Odyssey from "../assets/Odyssey.png";
import Nxt from "../assets/Nxt.png";
import College from "../assets/iiitkota.png";
import classNames from "classnames";
import 	Qns from '../assets/Qns.png';
// const Experience = ({ id }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           containerRef.current.classList.add("animate");
//         } else {
//           containerRef.current.classList.remove("animate");
//         }
//       },
//       { threshold: 0.3 } // Adjust the threshold as needed
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       className="bg-[#0C1137] w-full h-[100vh] max-md:h-[200vh]"
//       id={id}
//       ref={containerRef}
//     >
//       <div className="w-full h-full p-4 flex flex-col md:flex-row bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
//         <div className="w-full h-[8rem] my-10 hidden max-md:block">
//           <div className="w-full h-full flex justify-center items-center">
//             <h1 className="text-white text-4xl">E X P E R I E N C E S</h1>
//           </div>
//         </div>
//         <div className="w-full h-full md:w-1/2 min-md:h-1/2 flex flex-col items-center justify-around">
//           <div className="w-10/12 max-xl:w-[95%] h-[45%] shadow-2xl box1 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900 flex flex-col items-center">
//             <div className="relative pt-2 pl-2 w-full h-auto flex gap-4 items-center mb-4">
//               <img
//                 src={Network}
//                 className="w-[15%] max-xl:w-[18%] p-2 rounded-full bg-blue-800 shadow-2xl"
//                 alt="Network"
//               />
//               <h1 className="text-gray-300 text-xl font-semibold">
//                 IIITians Network
//               </h1>
//             </div>
//             <div className="w-10/12 h-4/6 border border-white"></div>
//             <button className="absolute bottom-4 right-4 p-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 rounded-xl shadow-xl text-gray-100">
//               Link Tree
//             </button>
//           </div>
//           <div className="w-10/12 max-xl:w-[95%] h-[45%] shadow-2xl box2 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900">
//             <div className="relative pt-2 pl-2 w-full h-auto flex gap-4 items-center">
//               <img
//                 src={College}
//                 className="w-[15%] p-2 max-xl:w-[18%] rounded-full bg-blue-800 shadow-2xl"
//                 alt="College"
//               />
//               <h1 className="text-gray-300 text-xl font-semibold max-xl:hidden">
//                 Training and Placement Cell - <br /> IIIT Kota
//               </h1>
//               <h1 className="text-gray-300 text-xl font-semibold hidden max-xl:block">
//                 TnP Cell -IIIT Kota
//               </h1>
//             </div>
//             <button className="absolute bottom-4 right-4 p-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 rounded-xl shadow-xl text-gray-100">
//               Website
//             </button>
//           </div>
//         </div>
//         <div className="w-full h-full min-md:h-1/2 md:w-1/2 flex flex-col items-center justify-around">
//           <div className="w-10/12 max-xl:w-[95%] h-[45%] shadow-2xl box3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900">
//             <div className="relative pt-2 pl-2 w-full h-auto flex gap-4 items-center">
//               <img
//                 src={GDSC}
//                 className="w-[15%] p-2 rounded-full max-xl:w-[18%] bg-blue-800 shadow-2xl"
//                 alt="GDSC"
//               />
//               <h1 className="text-gray-300 text-xl font-semibold">
//                 Google DSC IIIT Kota
//               </h1>
//             </div>
//           </div>
//           <div className="w-10/12 max-xl:w-[95%] h-[45%] shadow-2xl box4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-900">
//             <div className="relative pt-2 pl-2 w-full h-auto flex gap-4 items-center">
//               <img
//                 src={College}
//                 className="w-[15%] p-2 rounded-full max-xl:w-[18%] bg-blue-800 shadow-2xl"
//                 alt="College"
//               />
//               <h1 className="text-gray-300 text-xl font-semibold">
//                 Web Team - IIIT Kota
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

const Experience = ({ id }) => {
	const mainDivRef = useRef(null);
	const divRefs = useRef([]);
	const [visibleDivs, setVisibleDivs] = useState([]);
	const [mainInView, setMainInView] = useState(false);
	useEffect(() => {
		const handleObserver = (entries, observer) => {
			entries.forEach((entry) => {
				const index = entry.target.dataset.index;
				if (entry.isIntersecting) {
					setVisibleDivs((prev) => [...prev, index]);
				} else {
					setVisibleDivs((prev) => prev.filter((i) => i !== index));
				}
			});
		};

		const observer = new IntersectionObserver(handleObserver, {
			threshold: 0.1,
		});

		if (mainInView) {
			divRefs.current.forEach((div) => {
				if (div) {
					observer.observe(div);
				}
			});
		}

		return () => {
			observer.disconnect();
		};
	}, [mainInView]);

	useEffect(() => {
		const mainObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setMainInView(true);
				} else {
					setMainInView(false);
				}
			},
			{ threshold: 0.1 }
		);

		if (mainDivRef.current) {
			mainObserver.observe(mainDivRef.current);
		}

		return () => {
			if (mainDivRef.current) {
				mainObserver.unobserve(mainDivRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={mainDivRef}
			className="bg-[#0C1137] h-[100vh] w-full max-md:h-[220vh] -center p-4 max-sm:p-2 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex flex-col items-start gap-8"
			id={id}
		>
			<div className="w-full h-[8rem] hidden max-md:block">
				<div className="w-full h-full flex justify-center items-center">
					<h1 className="text-white text-4xl">E X P E R I E N C E S</h1>
				</div>
			</div>
			<div className="w-full h-full flex max-md:flex-col justify-center items-center p-4 max-sm:mb-12">
				<div className="w-1/2 max-md:w-full max-md:h-[100vh] h-full flex flex-col justify-center items-center p-4 gap-4">
					<div
						className={classNames(
							"w-full h-1/2 shadow-xl bg-blue-900 rounded-xl transition-opacity duration-1000 relative",
							{
								"opacity-0": !visibleDivs.includes("0"),
								"opacity-100": visibleDivs.includes("0"),
							}
						)}
						data-index="0"
						ref={(el) => (divRefs.current[0] = el)}
					>
						<div className=" p-2 w-full h-auto flex gap-4 items-center mb-4">
							<img
								src={Odyssey}
								className="w-[15%] max-xl:w-[18%] p-2 rounded-full bg-blue-800 shadow-2xl"
								alt="Network"
							/>
							<h1 className="text-gray-300 text-xl font-semibold">
								President - Odyssey - The Literature Society
							</h1>
						</div>
						<div className="w-full h-auto p-4 text-gray-200 text-sm">
						As the President of Odyssey, the Literature Club of IIIT Kota, I led the club’s activities and initiatives, focusing on fostering a vibrant literary community. I organized and facilitated various events like debates, poetry slams, storytelling sessions, and writing workshops, encouraging participation from students across the institute. During my tenure, I worked closely with other student bodies and external organizations to expand the club’s reach and create valuable collaborations. I also managed a team of coordinators, ensuring smooth execution of events, and increased the club's presence through active engagement with students, making it a central hub for literary discussions and creative expression on campus.
						</div>
						{/* <a href="https://linktr.ee/Iiitians.network" target="_blank">
							<button className="absolute bottom-2 right-2 p-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 rounded-xl shadow-xl text-gray-100">
								Link Tree
							</button>
						</a> */}
					</div>

					<div
						className={classNames(
							"w-full h-1/2 shadow-xl bg-blue-900 rounded-xl transition-opacity duration-1000 relative",
							{
								"opacity-0": !visibleDivs.includes("1"),
								"opacity-100": visibleDivs.includes("1"),
							}
						)}
						data-index="1"
						ref={(el) => (divRefs.current[1] = el)}
					>
						<div className=" p-2 w-full h-auto flex gap-4 items-center mb-4">
							<img
								src={Qns}
								className="w-[15%] max-xl:w-[18%] p-2 rounded-full bg-blue-800 shadow-2xl"
								alt="Network"
							/>
							<h1 className="text-gray-300 text-xl font-semibold">
								Quills-n-Stills - Editor-in-Chief
							</h1>
						</div>
						<div className="w-full h-auto p-4 text-gray-200 text-sm">
							As a key member of the Quills and Stills Magazine Club, I actively contributed to the 	club’s literary and creative efforts. I was involved in organizing and curating content 	for the magazine, ensuring that each edition featured high-quality writing, artwork, and 	photography that showcased the creative talents of our members. I also played a role in 	brainstorming themes for upcoming issues and assisted in coordinating with other 	departments, including marketing and design, to ensure the magazine’s successful 	distribution. Through this experience, I honed my editorial, content curation, and 	teamwork skills, all while helping to create a platform for students to express their 	artistic and literary passions.
						</div>
						{/* <a href="https://tpcell.iiitkota.ac.in/" target="_blank">
							<button className="absolute bottom-2 right-2 p-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 rounded-xl shadow-xl text-gray-100">
								Website
							</button>
						</a> */}
					</div>
				</div>
				<div className="w-1/2 h-full max-md:w-full max-md:h-[100vh] flex flex-col p-4 gap-4">
					<div
						className={classNames(
							"w-full h-1/2 shadow-xl bg-blue-900 rounded-xl transition-opacity duration-1000 relative",
							{
								"opacity-0": !visibleDivs.includes("2"),
								"opacity-100": visibleDivs.includes("2"),
							}
						)}
						data-index="2"
						ref={(el) => (divRefs.current[2] = el)}
					>
						<div className="relative p-2 w-full h-auto flex gap-4 items-center mb-4">
							<img
								src={College}
								className="w-[15%] max-xl:w-[18%] p-2 rounded-full bg-blue-800 shadow-2xl"
								alt="Network"
							/>
							<h1 className="text-gray-300 text-xl font-semibold">
								Webmasters Team - IIIT Kota
							</h1>
						</div>
						<div className="w-full h-auto p-4 text-gray-200 text-sm">
						I contributed to the management of IIIT Kota’s official website as part of the Webmasters team, ensuring the website’s functionality, updating content, and optimizing the user experience. My role involved keeping the site up to date with relevant information, improving accessibility, and collaborating with various teams to ensure smooth operation. This helped maintain the institution's digital presence, facilitating easy access to information for students, faculty, and other stakeholders. Additionally, I focused on enhancing website performance and streamlining content delivery to improve overall engagement.
						</div>
						{/* <a href="https://www.iiitkota.ac.in/" target="_blank">
							<button className="absolute bottom-2 right-2 p-2 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 rounded-xl shadow-xl text-gray-100">
								Website
							</button>
						</a> */}
					</div>

					<div
						className={classNames(
							"w-full h-1/2 rounded-xl shadow-xl bg-blue-900 transition-opacity duration-1000",
							{
								"opacity-0": !visibleDivs.includes("3"),
								"opacity-100": visibleDivs.includes("3"),
							}
						)}
						data-index="3"
						ref={(el) => (divRefs.current[3] = el)}
					>
						<div className="relative p-2 w-full h-auto flex gap-4 items-center mb-4">
							<img
								src={Nxt}
								className="w-[15%] max-xl:w-[18%] p-2 rounded-full bg-blue-800 shadow-2xl"
								alt="Network"
							/>
							<h1 className="text-gray-300 text-xl font-semibold">
								NxtSquare - React.js Developement Intern
							</h1>
						</div>
						<div className="w-full h-auto p-4 text-gray-200 text-sm">
							During my React Development internship at NxtSquare, I developed a strong foundation in 	front-end development by working on key projects aimed at improving user experiences. I 	contributed to the creation of a Data Management Board using React.js, which streamlined 	the management and visualization of data. I integrated REST APIs to fetch real-time data, 	enhancing the functionality and performance of the application. Additionally, I built 	reusable form components using React Hook Form and implemented form validation with Zod to 	ensure data integrity. This experience helped me sharpen my skills in React.js, API 	integration, and UI development, while working in an agile environment and collaborating 	with cross-functional teams to deliver quality solutions.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
