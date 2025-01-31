import React from "react";
import "./Modal.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";

const Modal = ({ isVisible, onClose }) => {
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className={`modal-overlay ${isVisible ? "visible" : ""}`}
			onClick={handleOverlayClick}
		>
			<div className="modal-content">
				<nav>
					<a
						href="#hero"
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById("hero")
								.scrollIntoView({ behavior: "smooth" });
							onClose();
						}}
						className="text-gray-300 text-2xl hover:cursor-pointer mb-6"
					>
						Home
					</a>
					<a
						href="#about"
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById("about")
								.scrollIntoView({ behavior: "smooth" });
							onClose();
						}}
						className="text-gray-300 text-2xl hover:cursor-pointer mb-6"
					>
						About
					</a>
					<a
						href="#experience"
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById("experience")
								.scrollIntoView({ behavior: "smooth" });
							onClose();
						}}
						className="text-gray-300 text-2xl hover:cursor-pointer mb-6"
					>
						Experience
					</a>
					<a
						href="#projects"
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById("projects")
								.scrollIntoView({ behavior: "smooth" });
							onClose();
						}}
						className="text-gray-300 text-2xl hover:cursor-pointer mb-6"
					>
						Projects
					</a>
					<a
						href="#contact"
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById("contact")
								.scrollIntoView({ behavior: "smooth" });
							onClose();
						}}
						className="text-gray-300 text-2xl hover:cursor-pointer mb-20"
					>
						Contact
					</a>
					<div className="flex gap-4">
						<a
							href="mailto:hiteshwarkaushik@gmail.com"
							className="text-[#01E2CD] text-3xl hover:cursor-pointer"
						>
							<MdOutlineAlternateEmail />
						</a>
						<a
							href="https://drive.google.com/file/d/1-5ty5MC6f8Pb-yPBnyyJ4Y0W41w1bGFc/view?usp=drive_link"
							className="text-[#01E2CD] text-3xl hover:cursor-pointer"
						>
							<IoDocumentText />
						</a>
						<a
							href="https://link-tree-ivory-three.vercel.app/"
							className="text-[#01E2CD] text-3xl hover:cursor-pointer"
						>
							<CgWebsite />
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Modal;
