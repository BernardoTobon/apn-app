
import Accordion from "./Accordion"

const AddUsers = () => {
    return <>
        <Accordion>
        <form>
            <div className="flex justify-center py-8 ">
                <h1>AGREGAR USUARIOS</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">

                <div className="flex flex-col p-8">
                    <label className="flex justify-center">Nombre</label>
                    <input className="text-center border-2 border-black rounded-full" type="text" required />
                </div>
                <div className="flex flex-col p-8 border-solid">
                    <label className="flex justify-center">Primer Apellido</label>
                    <input className="border-2 border-black rounded-full" type="text" required/>
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Segundo Apellido</label>
                    <input className="border-2 border-black rounded-full" type="text" required />
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Celular</label>
                    <input className="border-2 border-black rounded-full" type="text" required/>
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Email</label>
                    <input className="text-center border-2 border-black rounded-full" type="email" required/>
                </div>
                <div className="flex flex-col p-8 border-solid ">
                    <label className="flex justify-center">Cedula</label>
                    <input className="border-2 border-black rounded-full" type="text" required/>
                </div>
                <button type="submit">AGREGAR</button>
            </div>
        </form>
        </Accordion>
    </>
}

export default AddUsers