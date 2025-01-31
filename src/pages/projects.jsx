import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Tilt } from "react-tilt";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./projects.css";

// import required modules
// import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
// import { Keyboard, Pagination, Navigation } from "swiper/modules";

//project imports
import Tomato from "../assets/tomatowebsite.png";
import netflix from "../assets/netflix.png";
import truefeedback from "../assets/truefeedback.png";
import buildtextai from "../assets/buildtextai.png" ;

const Projects = ({ id }) => {
	const height = "calc(100vh)";
	const width = "calc(100vw - 15rem)";

	const defaultOptions = {
		reverse: false, // reverse the tilt direction
		max: 25, // max tilt rotation (degrees)
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
		speed: 2000, // Speed of the enter/exit transition
		transition: true, // Set a transition on enter/exit.
		axis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
	};

	return (
		<div
			className="bg-[#0C1137] h-screen w-[calc(100vw_-_15rem)] max-md:py-12 max-xl:w-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4"
			id={id}
		>
			<div className="w-full h-[8rem] hidden max-md:block">
				<div className="w-full h-full flex justify-center items-center">
					<h1 className="text-white text-4xl">P R O J E C T S</h1>
				</div>
			</div>
			<div className="w-full h-full flex justify-center items-center">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					keyboard={{
						enabled: true,
					}}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					// navigation={true}
					// modules={[Keyboard, Pagination, Navigation, Autoplay]}
					modules={[Keyboard, Pagination, Autoplay]}
					// modules={[Keyboard, Pagination, Navigation]}
					className="mySwiper w-full h-full mb-12"
				>
					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full p-8 max-md:p-0 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a href="https://github.com/harshitsharma1250/Dineconnect" target="_blank">
									<img
										src={Tomato}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4 text-center">
								Dineconnect - Food Delivery Website (MERN)
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
								This meticulously crafted MERN project showcases robust user
								authentication, driven by JWT, an intricately designed
								Express.js backend API, and seamless integration with Stripe for
								secure payment processing, epitomizing advanced web development
								prowess.
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full max-md:p-0 p-8 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a
									href="https://github.com/harshitsharma1250/BuildTextai"
									target="_blank"
								>
									<img
										src={buildtextai}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4  text-center">
								BuildTextAI - AI Content Generator (Next) 
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
							BuildTextAI is a full-stack application designed to help users generate creative social media content using AI. Built with the MERN stack and powered by Gemini AI, the app allows users to generate captions, tweets, and other creatives. It features Stripe for payments and Clerk for secure authentication. The platform includes data manipulation and visualization using Next.js, TypeScript, and ShadCN Charts, all wrapped in a responsive design with Tailwind CSS.
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full max-md:p-0 p-8 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a
									href="https://github.com/harshitsharma1250/TrueFeedback"
									target="_blank"
								>
									<img
										src={truefeedback}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4 text-center">
								TrueFeedback - Autonomous Feedback Platform (Next)
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
							TrueFeedback is a full-stack app for collecting and analyzing anonymous feedback. It uses Next.js, NextAuth for authentication, and Resend for OTP verification. The app features a user dashboard, Zod validation, and AI-powered analysis for actionable insights.
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className="bg-transparent flex flex-col">
						<div className="w-[80%] max-md:w-full h-2/3 max-sm:h-1/2 flex justify-center items-center">
							<Tilt
								options={defaultOptions}
								className="w-full h-full max-md:p-0 p-8 transition-all ease-in-out duration-75 hover:cursor-pointer"
							>
								<a href="https://github.com/harshitsharma1250/Cinesphere" target="_blank">
									<img
										src={netflix}
										className="w-full h-full object-scale-down"
										alt=""
									/>
								</a>
							</Tilt>
						</div>
						<div className="w-[80%] max-md:w-full h-1/3 max-sm:h-1/2 px-2 pt-8 pl-16 max-xl:pl-0 max-xl:pt-0 flex flex-col justify-start items-center">
							<h1 className="text-2xl text-gray-300 font-semibold mb-4 text-center">
								Cinesphere (React)
							</h1>
							<p className="text-[14px] font-thin w-[80%] max-md:w-full text-center">
								Created a React + Tailwind based personal portfolio website.
								Self designed the UI, and integrated Observer API, React smooth
								scroll, Swiper animation, Vanta js for interactive 3d background
								and Email js for contact me form. Made the webstie responsive
								across all screen sizes.
							</p>
						</div>
					</SwiperSlide>

				</Swiper>
			</div>
		</div>
	);
};

export default Projects;
