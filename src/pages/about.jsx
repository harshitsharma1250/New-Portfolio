import { useEffect, useRef, useState } from "react";
import { GoNorthStar } from "react-icons/go";
import { FaGit, FaLinkedinIn } from "react-icons/fa";
import {
	FaGithub,
	FaReact,
	FaNodeJs,
	FaJava,
	FaPython,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
} from "react-icons/fa";
import {
	SiMongodb,
	SiJavascript,
	SiCplusplus,
	SiC,
	SiExpress,
	SiTailwindcss,
	SiVercel,
} from "react-icons/si";
import classNames from "classnames";
import ME from "../assets/Me.png";
import College from "../assets/iiitkota.png";
import School from "../assets/school.png";
import Signature from "../assets/sign.png";
import "./about.css";

const About = ({ id }) => {
	const height = "calc(100vh - 0rem)";
	const mainDivRef = useRef(null);
	const divRefs = useRef([]);
	const [visibleDivs, setVisibleDivs] = useState([]);
	const [mainInView, setMainInView] = useState(false);

	const icons = [
		{ Component: FaGithub, name: "GitHub" },
		{ Component: FaGit, name: "Git" },
		{ Component: FaReact, name: "React" },
		{ Component: SiMongodb, name: "MongoDB" },
		{ Component: SiJavascript, name: "JavaScript" },
		{ Component: SiCplusplus, name: "C++" },
		{ Component: SiC, name: "C" },
		{ Component: FaJava, name: "Java" },
		{ Component: FaPython, name: "Python" },
		{ Component: FaHtml5, name: "HTML" },
		{ Component: FaCss3Alt, name: "CSS" },
		{ Component: SiTailwindcss, name: "Tailwind CSS" },
		{ Component: FaBootstrap, name: "Bootstrap" },
		{ Component: FaNodeJs, name: "Node.js" },
		{ Component: SiExpress, name: "Express" },
		{ Component: SiVercel, name: "Vercel" },
	];

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
			className="bg-[#0C1137] w-full h-screen max-sm:h-[130vh] flex flex-col justify-center items-center p-4 max-sm:p-2 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
			id={id}
		>
			<div className="w-full hidden max-sm:block h-[8rem]">
				<div className="w-full h-full flex justify-center items-center">
					<h1 className="text-4xl text-gray-200">A B O U T</h1>
				</div>
			</div>
			<div className="w-full h-full max-sm:h-[100vh] flex flex-col items-center max-sm:mb-12">
				<div className="w-[90%] max-md:w-[100%] h-2/6 flex">
					<div className="w-1/3 max-sm:w-1/2 h-full p-4 max-sm:p-2">
						<div
							className={classNames(
								"w-full h-full rounded-xl shadow-xl bg-blue-900 p-4 max-sm:p-2 transition-opacity duration-1000",
								{
									"opacity-0": !visibleDivs.includes("0"),
									"opacity-100": visibleDivs.includes("0"),
								}
							)}
							data-index="0"
							ref={(el) => (divRefs.current[0] = el)}
						>
							<div className="w-full h-full rounded-xl bg-blue-800 flex justify-center items-center">
								<img
									src={ME}
									className="w-[50%] max-tnd:w-[60%] max-md:w-[70%] max-sm:w-[80%] border-2 border-blue-900 p-0 bg-blue-950 shadow-2xl rounded-full"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="w-2/3 max-sm:w-1/2 h-full p-4 max-sm:p-2 flex flex-col gap-6 max-sm:gap-2">
						<div className="w-full h-1/4 flex items-center">
							<div className="w-2/12 max-tnd:w-1/12 text-gray-300 text-4xl text-center flex justify-end">
								<GoNorthStar />
							</div>
							<h1 className="w-8/12 max-tnd:w-10/12 text-white font-semibold text-5xl max-sm:text-[14px] max-tnd:text-4xl text-center">
								SELF-SUMMARY
							</h1>
							<div className="w-2/12 max-tnd:w-1/12 text-gray-300 text-4xl text-center flex justify-start">
								<GoNorthStar />
							</div>
						</div>
						<div
							className={classNames(
								"w-full h-3/4 shadow-xl bg-blue-900 p-2 rounded-xl transition-opacity duration-1000 pl-4",
								{
									"opacity-0": !visibleDivs.includes("1"),
									"opacity-100": visibleDivs.includes("1"),
								}
							)}
							data-index="1"
							ref={(el) => (divRefs.current[1] = el)}
						>
							<div className="w-full text-2xl max-sm:text-[14px] mb-2 max-sm:mb-0 mt-2 max-sm:-mt-1 text-gray-100">
								<h1>Harshit Sharma</h1>
							</div>
							<div className="w-11/12 max-sm:w-full h-auto text-gray-200 text-[12px] max-tnd:text-[11px] max-sm:text-[9px]">
								<h2>
									I am a Electronics and Communication final year student at IIIT Kota,
									with a focus on Web Development, Data Structures, Algorithms
									and Machine Learning. I have a diverse range of experience
									having worked across various technologies and projects.
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[90%] max-md:w-[100%] h-1/3 flex">
					<div className="w-1/2 h-full p-4 max-sm:p-2 flex justify-center items-center">
						<div
							className={classNames(
								"w-full h-full shadow-xl bg-blue-900 p-2 rounded-xl transition-opacity duration-1000 pl-2 max-md:pl-2 flex flex-col justify-center",
								{
									"opacity-0": !visibleDivs.includes("2"),
									"opacity-100": visibleDivs.includes("2"),
								}
							)}
							data-index="2"
							ref={(el) => (divRefs.current[2] = el)}
						>
							<p className="w-full text-sm text-gray-300 mt-2 text-md">
								Education
							</p>
							<div className="w-full h-1/2 mb-0 flex mt-2 max-sm:gap-2">
								<div className="w-[30%] max-sm:hidden h-full flex justify-center items-start max-sm:items-center">
									<a href="https://stanselmsmns.ac.in/" target="_blank">
										{" "}
										<img src={School} className="w-[4rem]" alt="" />
									</a>
								</div>
								<div className="w-[70%] max-sm:w-full h-full">
									<p className="text-gray-300 text-[12px] max-tnd:text-[11px] ">
										2015-21
									</p>
									<h2 className="text-gray-100 max-sm:text-[12px] text-md max-sm:text-sm">
										10th and 12th
									</h2>
									<p className="text-gray-300 text-[12px] max-tnd:text-[11px] ">
										Saint Anselms School, Jaipur, Rajasthan.
									</p>
								</div>
							</div>
							<div className="w-full h-1/2 flex max-sm:gap-2">
								<div className="w-[30%] max-sm:hidden h-full flex justify-center items-start max-sm:items-center">
									<a href="https://www.iiitkota.ac.in" target="_blank">
										<img src={College} className="w-[3.5rem]" alt="" />
									</a>
								</div>
								<div className="w-[70%] max-sm:w-full h-full">
									<div className="w-full h-auto">
										<p className="text-gray-300 text-[12px] max-tnd:text-[11px] ">
											2021-25
										</p>
										<h2 className="text-gray-100 text-md max-sm:text-[12px] ">
											Bachelors in Technology
										</h2>
										{/* <h2 className="text-gray-100 text-md max-sm:text-sm hidden max-sm:block">
											B.Tech.
										</h2> */}
										<p className="text-gray-300 text-[12px] max-tnd:text-[11px] ">
											IIIT Kota
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-1/2 h-full p-4 max-sm:p-2 flex justify-center items-center">
						<div
							className={classNames(
								"w-full h-full rounded-xl shadow-xl bg-blue-900 transition-opacity duration-1000 flex flex-col gap-4 max-sm:p-2 p-2",
								{
									"opacity-0": !visibleDivs.includes("3"),
									"opacity-100": visibleDivs.includes("3"),
								}
							)}
							data-index="3"
							ref={(el) => (divRefs.current[3] = el)}
						>
							<h1 className="w-full text-gray-300 text-md">Skills</h1>
							<div className="slider">
								<div className="slide-track">
									{icons.map(({ Component, name }, i) => (
										<div className="slide" key={i}>
											<Component className="icon text-blue-400" />
										</div>
									))}
									{icons.map(({ Component, name }, i) => (
										<div className="slide" key={i + icons.length}>
											<Component className="icon text-blue-400" />
										</div>
									))}
								</div>
							</div>
							<div className="fast-slider">
								<div className="fast-slide-track">
									{icons.map(({ Component, name }, i) => (
										<div className="fast-slide" key={i}>
											<Component className="fast-icon text-blue-300" />
										</div>
									))}
									{icons.map(({ Component, name }, i) => (
										<div className="fast-slide" key={i + icons.length}>
											<Component className="fast-icon text-blue-300" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[90%] max-md:w-[100%] h-1/3 flex">
					<div className="w-1/4 max-sm:w-1/2 max-lg:w-1/3 p-4 max-sm:p-2 h-full">
						<div
							className={classNames(
								"w-full h-full rounded-xl shadow-xl bg-blue-900 flex flex-col items-center p-1 md:p-2 transition-opacity duration-1000",
								{
									"opacity-0": !visibleDivs.includes("4"),
									"opacity-100": visibleDivs.includes("4"),
								}
							)}
							data-index="4"
							ref={(el) => (divRefs.current[4] = el)}
						>
							<div className="w-[90%] h-2/3 rounded-2xl shadow-2xl flex gap-4 max-sm:p-2 max-md:gap-2 max-sm:gap-[1px] justify-center items-center bg-blue-800">
								<a
									href="https://www.linkedin.com/in/harshitsharmaiiitkota/"
									target="_blank"
								>
									<div className="w-auto h-auto rounded-full text-gray-300 text-7xl max-sm:text-5xl max-sm:p-2 max-md:text-6xl shadow-2xl hover:cursor-pointer bg-blue-900">
										<FaLinkedinIn className="p-4 max-sm:p-2" />
									</div>
								</a>
								<a href="https://www.github.com/harshitsharma1250" target="_blank">
									<div className="w-auto h-auto rounded-full text-gray-300 text-7xl max-md:text-6xl max-sm:text-5xl max-sm:p-2 shadow-2xl hover:cursor-pointer bg-blue-900">
										<FaGithub className="p-4 max-sm:p-2" />
									</div>
								</a>
							</div>
							<div className="w-[90%] h-1/3 flex flex-col justify-center items-start text-gray-300 text-md">
								<p className="text-[12px] max-tnd:text-[11px]  text-gray-300">
									stay with me
								</p>
								<h1>My Profiles</h1>
							</div>
						</div>
					</div>
					<div className="w-2/4 max-sm:hidden max-lg:w-1/3 p-4 max-sm:p-2 h-full">
						<div
							className={classNames(
								"w-full h-full rounded-xl shadow-xl bg-blue-900 p-2 transition-opacity duration-1000 flex flex-col pl-4 hover:cursor-pointer",
								{
									"opacity-0": !visibleDivs.includes("5"),
									"opacity-100": visibleDivs.includes("5"),
								}
							)}
							data-index="5"
							ref={(el) => (divRefs.current[5] = el)}
						>
							<div className="w-full h-2/5"></div>
							<div className="w-full h-3/5 flex flex-col text-semibold text-gray-100 text-4xl max-tnd:text-2xl gap-2">
								<h1>Lets</h1>
								<h1>
									work <span className="text-red-400">together.</span>
								</h1>
							</div>
						</div>
					</div>
				<div className="w-1/4 max-sm:w-1/2 max-lg:w-1/3 p-4 max-sm:p-2 h-full">
                    <div
                      className={classNames(
                        "w-full h-full rounded-xl shadow-xl bg-blue-900 p-2 transition-opacity duration-1000 flex flex-col",
                        {
                          "opacity-0": !visibleDivs.includes("6"),
                          "opacity-100": visibleDivs.includes("6"),
                        }
                      )}
                      data-index="6"
                      ref={(el) => (divRefs.current[6] = el)}
                    >
                    <div className="w-full h-[70%] flex justify-center items-center">
                      <img
                        src={Signature}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-full h-[30%] text-gray-200 flex flex-col p-2">
                      <p className="text-[12px] max-tnd:text-[11px] text-gray-300">
                        More about me
                      </p>
                      <h1 className="text-gray-300 text-md">My credentials</h1>
                    </div>
                </div>
               </div>
				</div>
			</div>
		</div>
	);
};

export default About;
