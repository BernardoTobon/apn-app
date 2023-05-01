import { useState } from "react";

const Accordion = (props) => {
  const { children, className } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className || "border-2 border-dark-green w-50"}>
      Agenda
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
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "max-h-[500px]" : "max-h-[0px]"
        } overflow-auto transition-all duration-500 ease-in-out`}
      >
        <div className="px-4 pb-4 bg-tea-green">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
