
import Accordion from "./Accordion"

const AddUsers = () => {
    return <>
        <Accordion>
            <div className="bg-dark-green bg-opacity-50">
        <form>
            <div className="flex justify-center py-8">
                <h1 className="font-extrabold text-2xl font-russo-one " >Nuevo Usuario</h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4">

                <div className="flex flex-col p-8">
                    <label className="flex justify-center">Nombre</label>
                    <input className="border-2 border-black rounded-full text-center" type="text" required />
                </div>
                <div className="flex flex-col p-8 border-solid">
                    <label className="flex justify-center">Primer Apellido</label>
                    <input className="border-2 border-black rounded-full text-center" type="text" required/>
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Segundo Apellido</label>
                    <input className="border-2 border-black rounded-full text-center" type="text" required />
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Celular</label>
                    <input className="border-2 border-black rounded-full text-center" type="text" required/>
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Email</label>
                    <input className="text-center border-2 border-black rounded-full text-center" type="email" required/>
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Cedula</label>
                    <input className="border-2 border-black rounded-full text-center" type="text" required/>
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Genero</label>
                    <select>
                        <option>Hombre</option>
                        <option>Mujer</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center">
                    
                <button className="m-2 bg-dark-green rounded-full w-[25vw]" type="submit">AGREGAR</button>
                
                </div>
        </form>
        </div>
        </Accordion>
    </>
}

export default AddUsers