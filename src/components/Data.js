import {
  Address,
  Age,
  Birthday,
  CellPhone,
  City,
  Department,
  Di,
  Education,
  Email,
  GenderIcon,
  Info,
  Phone,
} from "@/icons";
import UserTabs from "./TabMenu";
import { GENDER } from "@/constants";
import { useState } from "react";
import Hashtags from "./Hashtags";
import { useRouter } from "next/router";

const AvatarComponent = ({ Gender }) => {
  return (
    <>
      {Gender == "hombre" ? (
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png"
          
        />
      ) : (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInqp7OXfP5a9KAHlVYne4ZFQufaoKLACB0du-GHAGeq1DV5v24lPJp1aR-C5r6ITQ-yo&usqp=CAU"
        />
      )}
    </>
  );
};

const UserData = () => {
  const [Gender, setGender] = useState("hombre");
  const handleOfChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <UserTabs>
        <div className="flex items-center flex-col">
          <div className="w-24 h-24 p-1">
            {Gender && <AvatarComponent Gender={Gender} />}
          </div>
          <div>
            <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
              Datos de identidad
            </h1>
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Nombre</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Primer Apellido </span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Segundo Apellido</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Di}
                  <span className="text-light-brown">DI</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Birthday}
                  <span className="text-light-brown">Fecha De Nacimiento</span>
                </label>
                <input
                  className="text-light-brown text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="date"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Age}
                  <span className="text-light-brown">Edad</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {GenderIcon}
                  <span className="text-light-brown">Genero</span>
                </label>
                <select
                  value={Gender}
                  onChange={handleOfChange}
                  className=" text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                >
                  {GENDER.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Education}
                  <span className="text-light-brown">Escolaridad</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
            </div>
            <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
              Datos De Contacto
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {CellPhone}
                  <span className="text-light-brown">Celular</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Phone}
                  <span className="text-light-brown">Teléfono Fijo</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Email}
                  <span className="text-light-brown">E-mail</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="email"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Address}
                  <span className="text-light-brown">Dirección</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {City}
                  <span className="text-light-brown">Ciudad</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Department}
                  <span className="text-light-brown">Departamento</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
            </div>
            <Hashtags/>
          </form>
        </div>
      </UserTabs>
    </>
  );
};

export default UserData;
