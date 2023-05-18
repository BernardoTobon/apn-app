const Goals = () => {
  return (
    <>

        <div className="flex items-center flex-col">
            <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
              Objetivos
            </h1>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-32 w-96 pt-8">
                <label className="flex justify-center text-dark-green">
                  <span className="text-light-brown">Objetivos Del Paciente</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg h-24"
                  type="text"
                />
              </div>
              <div className="m-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-32 w-96 pt-8">
                <label className="flex justify-center text-dark-green">
                  <span className="text-light-brown">Plan Alimenticio</span>
                </label>
                <input
                  className="text-center text-light-brown border border-2 border-dark-green focus:outline-none m-1 rounded-lg h-24"
                  type="text"
                />
              </div>
            </div>
          </form>
        </div>
    </>
  );
};

export default Goals;
