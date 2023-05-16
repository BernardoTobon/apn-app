const UserView = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <div className="w-24 h-24 p-1 pt-8">
          <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png"
          />
        </div>
        <div className="p-7">
          <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">Cristiano Ronaldo</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
          <div className="flex flex-col items-center m-2">
            <label className="text-dark-green">Peso</label>
            <label  className="focus:outline-none border border-2 border-r-0 border-t-0 border-l-0 border-fluorescent-green text-center text-light-brown rounded-lg w-32">20 kg</label>
          </div>
          <div className="flex flex-col items-center m-2">
            <label className="text-dark-green">Estatura</label>
            <label className="focus:outline-none border border-2 border-r-0 border-t-0 border-l-0 border-fluorescent-green text-center text-light-brown rounded-lg w-32"> 180</label>
          </div>
          <div className="flex flex-col items-center m-2">
            <label className="text-dark-green">IMC</label>
            <label className="focus:outline-none border border-2 border-r-0 border-t-0 border-l-0 border-fluorescent-green text-center text-light-brown rounded-lg w-32">10%</label>
          </div>
          <div className="flex flex-col items-center m-2">
            <label className="text-dark-green">Bioimpedancia</label>
            <label className="focus:outline-none border border-2 border-r-0 border-t-0 border-l-0 border-fluorescent-green text-center text-light-brown rounded-lg w-32">15%</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserView;
