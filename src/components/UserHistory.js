import {
  Allergy,
  BloodType,
  ClinicalHistory,
  Consultation,
  DDiagnosis,
  HashtagsIcon,
  Surgery,
  Therapy,
} from "@/icons";
import UserTabs from "./TabMenu";
import { BLOOD_TYPE } from "@/constants";

const UserHistory = () => {
  return (
    <>
      <UserTabs>
        <div className="flex items-center flex-col">
          <h1 className="flex justify-center m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
            Historia Clinica
          </h1>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Consultation}
                  <span className="text-light-brown">Motivo De Consulta</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {BloodType}
                  <span className="text-light-brown">Tipo De Sangre</span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  {BLOOD_TYPE.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Surgery}
                  <span className="text-light-brown">Cirugias Realizadas</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Allergy}
                  <span className="text-light-brown">Alergias</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {DDiagnosis}
                  <span className="text-light-brown">Diagnostico Previo</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Therapy}
                  <span className="text-light-brown">Terapia Previa</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {ClinicalHistory}
                  <span className="text-light-brown">
                    Antecedentes Heredo-Familiares
                  </span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center ">
            </div>
          </form>
        </div>
      </UserTabs>
    </>
  );
};

export default UserHistory;
