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
          <img className="h-80 w-96 border-2 m-8 border-dark-green " src="/apnl.png" />
          </Tilt>
        </div>
        
        
        <div className="flex justify-center">
          <Accordion>
            <Calendar />
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default StartHome;
