
const AddRecipe = () => {
  return (
    <div className="flex justify-center">
      <form>
        <div >
        <div className="flex justify-center">
        <input
          type="text"
          placeholder="Nombre De La Receta"
          className="border border-2 border-dark-green rounded-lg m-8 focus:outline-none text-dark-green text-center"
        />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-col items-center m-2">
            <label className="text-dark-green">Imagen</label>
          <input type="file" 
          className="border border-2 border-fluorescent-green focus:outline-none"/>
        </div>
        <div className="flex flex-col items-center m-2">
            <label className="text-dark-green">Ingredientes</label>
          <textarea className="border border-2 border-fluorescent-green focus:outline-none"/>
        </div>
        <div className="flex flex-col items-center m-2">
            <label className="text-dark-green">Preparacion</label>
          <textarea className="border border-2 border-fluorescent-green focus:outline-none"/>
        </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
