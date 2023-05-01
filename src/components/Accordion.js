import { useState } from 'react';


const Accordion = (props) => {
  const {children, className} = props
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className || "border-2 border-dark-green "} >
      <div onClick={()=>setIsOpen(!isOpen)} className='grid justify-items-end'>
        <button>CLICK ME!</button>
      </div>  
      <div
        className={`${isOpen ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-auto transition-all duration-500 ease-in-out`}
      >
        <div className="px-4 pb-4 bg-tea-green">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
    