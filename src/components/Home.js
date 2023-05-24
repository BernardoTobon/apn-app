import Link from "next/link";
import Accordion from "./Accordion";
import Calendar from "./DatePicker";
import Tilt from "react-parallax-tilt";
import UserCard from "./UserCard";
import { userDataDetail } from "../../constants";

const StartHome = () => {
  
  return (
    <>
      <div className="w-full h-screen overflow-auto">
        <div className="flex justify-center">
          <Tilt>
            <img
              className="drop-shadow-2xl rounded-full h-70 w-[70vw] md:w-96 md:h-80 lg:w-96 lg:h-80 border-2 m-6 border-dark-green "
              src="/apnl.png"
            />
          </Tilt>
        </div>

        <div className="flex justify-center">
          <div className="w-[80vw] bg-white md:w-[60vw]">
            <Accordion>
              <Calendar />
            </Accordion>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center md:flex-row m-2">
          {
            userDataDetail.map(
              (user,index) => <UserCard key={index} {...user} name={user.name2}/>
            )
          }
        </div>
      </div>
    </>
  );
};

export default StartHome;
