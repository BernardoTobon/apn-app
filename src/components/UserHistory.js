import { Allergy, BloodType, ClinicalHistory, Consultation, DDiagnosis, Hashtags, Surgery, Therapy } from "@/icons";
import UserTabs from "./TabMenu";

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
                <label className="flex justify-center">
                 {Consultation}
                  Motivo De Consulta
                </label>
                <input
                  className="text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center">
                 {BloodType}
                  Tipo De Sangre
                </label>
                <select className="text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center">
                  {Surgery}
                  Cirugias Realizadas
                </label>
                <input
                  className="text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center">
                 {Allergy}
                  Alergias
                </label>
                <input
                  className="text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center">
                  {DDiagnosis}
                  Diagnostico Previo
                </label>
                <input
                  className="text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center">
                  {Therapy}
                  Terapeutica Previa
                </label>
                <input
                  className="text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center">
                  {ClinicalHistory}
                  Antecedentes Heredo-Familiares
                </label>
                <input
                  className="text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center ">
            <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-64 w-full pt-8">
              <label className="flex justify-center">
                {Hashtags}
                Hashtags
              </label>
              <input
                className="text-center border border-2 border-dark-green focus:outline-none m-1 rounded-lg h-64"
                type="text"
              />
            </div>
            </div>
          </form>
        </div>
      </UserTabs>
    </>
  );
};

export default UserHistory;
