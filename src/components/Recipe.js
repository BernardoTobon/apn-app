import Link from "next/link"

const Recipe = () => {
  return <>
  <h1 className="flex justify-center m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">Mis Recetas</h1>
  <div className="flex justify-center">
    <input className="focus:outline-none border border-2 border-fluorescent-green" type="search"></input>
     <Link href={"#"} className="border border-2 border-dark-green bg-light-green rounded-lg">Nueva Receta</Link>
  </div>
  </>
}
 
export default Recipe