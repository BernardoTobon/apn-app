import { useState } from "react";

const Accordion = (props) => {
  const { children, className } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        className={
          className || "border-4 border-fluorescent-green w-[95vw] rounded-lg"
        }
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="grid justify-items-end"
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 text-dark-green transition-transform duration-500 ease-in-out ${
                isOpen ? "rotate-0" : "rotate-180"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "max-h-[500px]" : "max-h-[0px]"
          } overflow-auto transition-all duration-500 ease-in-out`}
        >
          <div className="px-4 pb-4 ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
