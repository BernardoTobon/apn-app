import Link from "next/link";
import Accordion from "./Accordion";
import Calendar from "./DatePicker";
import Tilt from 'react-parallax-tilt'

const StartHome = () => {
  return (
    <>
      <div className="w-full h-screen  bg-tea-green overflow-auto">
        
        <div className="flex justify-center">
        <Tilt>
          <img className="h-70 w-[70vw] md:w-96 md:h-80 lg:w-96 lg:h-80 border-2 m-6 border-dark-green " src="/apnl.png" />
          </Tilt>
        </div>
        
        
        <div className="flex justify-center">
          <div className="w-[60vw]">
          <Accordion>
            <Calendar />
          </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartHome;
