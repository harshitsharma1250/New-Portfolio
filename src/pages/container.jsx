import React, { useRef, useEffect, useState } from "react";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Contact from "./contact.jsx";
import Experience from "./experience.jsx";
import "./Container.css";
import Footer from "../components/Footer.jsx";
import { RxHamburgerMenu as Hamburger } from "react-icons/rx";
import Modal from "../components/Modal.jsx";

const Container = ({ setActiveSection }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const sections = [
      aboutRef,
      homeRef,
      projectsRef,
      experienceRef,
      contactRef,
    ];

    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [setActiveSection, observerOptions]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="h-screen max-sm:fixed max-sm:left-0 max-sm:top-0 max-sm:overflow-x-hidden w-[calc(100vw_-_15rem)] overflow-hidden absolute left-[15rem] top-[0rem] max-xl:w-full max-xl:left-0 max-xl:top-0 max-xl:overflow-scroll custom-scroll"
      id="container"
    >
      <div className="w-[4rem] h-[4rem] hidden max-xl:block fixed top-2 right-2 z-10 p-2 rounded-full shadow-2xl bg-blue-950 hover:cursor-pointer">
        <div className="w-full h-full text-[#01E2CD] text-[2.5rem] flex justify-center items-center">
          <Hamburger
            onClick={() => setModalVisible(!isModalVisible)}
            id="hamburger shadow-2xl"
          />
        </div>
      </div>
      <Hero id="hero" ref={homeRef} />
      <About id="about" ref={aboutRef} />
      <Experience id="experience" ref={experienceRef} />
      <Projects id="projects" ref={projectsRef} />
      <Contact id="contact" ref={contactRef} />
      <Footer />
      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default Container;
