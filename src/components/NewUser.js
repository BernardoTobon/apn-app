import Accordion from "./Accordion";
import Data from "./Data";
import Goals from "./Goals";
import LifeStyle from "./LifeStyle";
import UserHistory from "./UserHistory";

const NewUser = () => {
  return (
    <>
      <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
        Nuevo Usuario
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col">
            <div className="m-2">
            <Accordion>
            <Data />
          </Accordion>
            </div>
         <div className="m-2">
         <Accordion>
            <UserHistory/>
          </Accordion>
         </div>
         <div className="m-2">
         <Accordion>
            <LifeStyle/>
          </Accordion>
         </div>
         <div className="m-2">
         <Accordion>
            <Goals/>
          </Accordion>
         </div>
        </div>
      </div>
    </>
  );
};

export default NewUser;
