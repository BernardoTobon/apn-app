import { Info, Schedule, Sports, Stress, Work, WorkDescription } from "@/icons";
import UserTabs from "./TabMenu";
import { info } from "autoprefixer";

const LifeStyle = () => {
  return (
    <>
      <UserTabs>
        <div className="flex items-center flex-col">
          <div>
            <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
              Actividad Laboral
            </h1>
          </div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Work}
                  <span className="text-light-brown">Actividad Laboral</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {WorkDescription}
                  <span className="text-light-brown">
                    Descripción Actividad Laboral
                  </span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Schedule}
                  <span className="text-light-brown">
                    Horario De Trabajo +Horas
                  </span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Stress}
                  <span className="text-light-brown">Nivel De Estrés</span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  <option>Sin Estrés</option>
                  <option>Ocasional</option>
                  <option>Repetitivo</option>
                  <option>Cronico</option>
                </select>
              </div>
            </div>
            <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
              Actividades Físicas
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">
                    ¿Realizas actividad física?
                  </span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  <option>Si</option>
                  <option>No</option>
                  <option>He Realizado</option>
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">
                    ¿Actividad Física + Tratamiento?
                  </span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">
                    Dias x Semana Actividad Física
                  </span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  <option>Ninguno</option>
                  <option>1-3</option>
                  <option>3-5</option>
                  <option>+5</option>
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Actividad Fisica-Tiempo</span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  <option>- 15 Min</option>
                  <option>30 Min</option>
                  <option>45 Min</option>
                  <option>60 Min</option>
                  <option>+ 60 Min</option>
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Horario Factible</span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  <option>Mañana</option>
                  <option>Tarde</option>
                  <option>Noche</option>
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Deportes Practicados</span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg">
                  <option>Correr/Trotar</option>
                  <option>Natación</option>
                  <option>Entenamiento En Gimansio</option>
                  <option>Entenamiento En Casa</option>
                </select>
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-24 w-72 pt-8">
                <label className="flex justify-center text-dark-green">
                  {Sports}
                  <span className="text-light-brown">
                    Actividades Deportivas
                  </span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg"
                  type="text"
                />
              </div>
            </div>
            <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
              Hábitos Tóxicos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center">
           <div className="flex items-center flex-col m-1 border border-2 border-fluorescent-green rounded-lg m-1 h-50 w-50">
           <label className="text-dark-green">Consumo De Cigarrillo</label>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
           <div className="m-2 flex flex-col pt-2">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Frecuencia</span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg w-48">
                  <option>No</option>
                  <option>Ex Fumador</option>
                  <option>Mensual</option>
                  <option>2 Veces Por Mes</option>
                  <option>3 Veces Por Mes</option>
                  <option>Semanal</option>
                  <option>2 Veces Por Semana</option>
                  <option>3 Veces Por Semana</option>
                  <option>4 Veces Por Semana</option>
                  <option>5 Veces Por Semana</option>
                  <option>6 Veces Por Semana</option>
                  <option>Diario</option>
                </select>
              </div>
              <div className="m-2 flex flex-col pt-2">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Cantidad</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg w-48 "
                  type="text"
                />
              </div>
              </div>
           </div>
              </div>
              <div className="flex justify-center">
           <div className="flex items-center flex-col m-1 border border-2 border-fluorescent-green rounded-lg m-1 h-50 w-50">
           <label className="text-dark-green">Consumo De Alcohol</label>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
           <div className="m-2 flex flex-col pt-2">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Frecuencia</span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg w-48">
                  <option>No</option>
                  <option>Ex Fumador</option>
                  <option>Mensual</option>
                  <option>2 Veces Por Mes</option>
                  <option>3 Veces Por Mes</option>
                  <option>Semanal</option>
                  <option>2 Veces Por Semana</option>
                  <option>3 Veces Por Semana</option>
                  <option>4 Veces Por Semana</option>
                  <option>5 Veces Por Semana</option>
                  <option>6 Veces Por Semana</option>
                  <option>Diario</option>
                </select>
              </div>
              <div className="m-2 flex flex-col pt-2">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Cantidad</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg w-48"
                  type="text"
                />
              </div>
              </div>
           </div>
              </div>
              <div className="flex justify-center">
           <div className="flex items-center flex-col m-1 border border-2 border-fluorescent-green rounded-lg m-1 h-50 w-50">
           <label className="text-dark-green">Consumo De Drogas</label>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
           <div className="m-2 flex flex-col pt-2">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Frecuencia</span>
                </label>
                <select className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg w-48">
                  <option>No</option>
                  <option>Ex Fumador</option>
                  <option>Mensual</option>
                  <option>2 Veces Por Mes</option>
                  <option>3 Veces Por Mes</option>
                  <option>Semanal</option>
                  <option>2 Veces Por Semana</option>
                  <option>3 Veces Por Semana</option>
                  <option>4 Veces Por Semana</option>
                  <option>5 Veces Por Semana</option>
                  <option>6 Veces Por Semana</option>
                  <option>Diario</option>
                </select>
              </div>
              <div className="m-2 flex flex-col pt-2">
                <label className="flex justify-center text-dark-green">
                  {Info}
                  <span className="text-light-brown">Cantidad</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg w-48"
                  type="text"
                />
              </div>
              </div>
              </div>
           </div>
              </div>
          </form>
        </div>
      </UserTabs>
    </>
  );
};

export default LifeStyle;
