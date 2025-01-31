import React, { useState, useEffect } from "react";
import FAQloader from "../assets/faqloading.gif";
import "./Sidebar.css";
import FAQAccordian from "./FAQAccordian.jsx";

const Sidebar = ({ activeSection }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iconRotation, setIconRotation] = useState(0); // state to track icon rotation
  const [activeItem, setActiveItem] = useState("hero"); // state to track active list item

  const openModal = () => {
    setIsModalOpen(true);
    setLoading(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLoading(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const rotateIcon = () => {
    setIconRotation((prevRotation) => prevRotation + 180); // rotate by 180 degrees
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id); // Set the clicked item as active
    }
  };

  return (
    <div className="absolute left-0 top-0 h-screen w-[15rem] bg-[#232C79] max-xl:hidden">
      <div className="absolute top-0 w-full h-[7rem] flex flex-col justify-center items-center">
        <div
          className="flip-container hover:cursor-pointer"
          onClick={rotateIcon}
        >
          <div className="cube-animation">
            <span className="front">
              <a
                href="https://drive.google.com/file/d/1uYgxp2YbSFypwgN5i-f2Ag2wmhDDZKyo/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harshit
              </a>
            </span>
            <span className="back">
              <a
                href="https://drive.google.com/file/d/1uYgxp2YbSFypwgN5i-f2Ag2wmhDDZKyo/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>Resume</h1>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div
        className="w-full absolute top-[7rem] flex flex-col"
        style={{ height: "calc(100vh - 7rem)" }}
      >
        <div className="w-full h-[50%] flex flex-col justify-center items-center mt-12">
          <ul className="p-0 flex flex-col justify-around h-full gap-4">
            <li
              onClick={() => handleClick("hero")}
              className={
                activeItem === "hero"
                  ? "active text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
                  : "text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
              }
            >
              <h1>Home</h1>
            </li>
            <li
              onClick={() => handleClick("about")}
              className={
                activeItem === "about"
                  ? "active text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
                  : "text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
              }
            >
              <h1>About</h1>
            </li>
            <li
              onClick={() => handleClick("experience")}
              className={
                activeItem === "experience"
                  ? "active text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
                  : "text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
              }
            >
              <h1>Experience</h1>
            </li>
            <li
              onClick={() => handleClick("projects")}
              className={
                activeItem === "projects"
                  ? "active text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
                  : "text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
              }
            >
              <h1>Projects</h1>
            </li>
            <li
              onClick={() => handleClick("contact")}
              className={
                activeItem === "contact"
                  ? "active text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
                  : "text-2xl text-white p-2 flex-1 flex items-center hover:cursor-pointer"
              }
            >
              <h1>Contact</h1>
            </li>
          </ul>
        </div>
        <div className="w-full h-[50%] flex justify-center items-center">
          <ul className="flex flex-col gap-4">
            <li
              className="text-[#00e6cf] hover:cursor-pointer text-lg hover:text-red-400 transition-all delay-100"
              onClick={openModal}
            >
              FAQs
            </li>
            <a
              href="https://www.linkedin.com/in/harshitsharmaiiitkota"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-[#00e6cf] hover:cursor-pointer text-lg hover:text-red-400 transition-all delay-100">
                LinkedIn
              </li>
            </a>
            <a
              href="https://www.github.com/harshitsharma1250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="text-[#00e6cf] hover:cursor-pointer text-lg hover:text-red-400 transition-all delay-100">
                GitHub
              </li>
            </a>
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-35">
          <div className="bg-[#130831] rounded-xl w-[90%] h-[90%] relative p-4">
            <div className="w-full h-[4rem] px-4 flex">
              <div className="w-[90%] h-full flex items-center">
                {loading ? (
                  <h1 className="text-xl text-white hidden">FAQs</h1>
                ) : (
                  <h1 className="text-3xl text-white">FAQs</h1>
                )}
              </div>
              <div className="w-[10%] h-full flex justify-end items-center">
                <button
                  className="bg-red-500 hover:bg-red-400 text-white p-2 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="h-full w-full flex items-center justify-center">
              {loading ? (
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <img src={FAQloader} className="h-1/2" alt="Loading..." />
                  <h1 className="text-2xl text-white">Loading...</h1>
                </div>
              ) : (
                <div className="w-full h-[80%] flex flex-col justify-start -mt-[2rem] gap-8 overflow-y-scroll custom-scroll">
                  <FAQAccordian
                    question="Who am I?"
                    answer="I'm Harshit Sharma - a final year eletronics and communication undergrad at IIIT Kota. I'm a MERN stack developer, a DSA enthusiast, a Competitive Programmer, and a community leader."
                  />
                  <FAQAccordian
                    question="How to contact you?"
                    answer="You can reach out to me at my professional mail address - harshitshrm8@gmail.com, through my LinkedIn where I'm active, or through this website."
                  />
                  <FAQAccordian
                    question="When are you available for interns/job?"
                    answer="I will be looking for SDE interns throughout my Final Year, and job opportunities as well."
                  />
                  <FAQAccordian
                    question="What kind of projects have you worked upon in the past?"
                    answer="I've made several full stack projects leveraging the MERN stack, Next.js, RESTful APIs and Tailwind Css."
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
