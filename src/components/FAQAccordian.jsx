import React, { useState } from "react";

const FAQAccordian = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 ${
            isOpen ? "rounded-t-xl" : "rounded-xl"
          } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          <span>{question}</span>
          <svg
            className={`w-3 h-3 transform rotate-180 ${
              isOpen ? "rotate-0" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${
          isOpen ? "" : "hidden"
        } dark:bg-gray-900`}
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordian;
