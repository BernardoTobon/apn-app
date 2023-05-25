import { AddIcon, SearchIcon } from "@/icons";
import Link from "next/link";

const Recipe = () => {
  return (
    <>
      <h1 className="flex justify-center m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">
        Mis Recetas
      </h1>
      <div className="flex justify-center space-x-4">
        <input
          className="focus:outline-none border border-2 border-fluorescent-green h-10 rounded-lg text-center"
          type="search"
          placeholder="Buscar"
        ></input>
        <Link href={"/recipe/addrecipe"}>{AddIcon}</Link>
      </div>
        <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
          <div className="border border-2 border-fluorescent-green h-48 w-48 m-4 rounded-lg">
            <Link href={"/recipe/recipeview"}>click</Link>
          </div>
          <div className="border border-2 border-fluorescent-green h-48 w-48 m-4 rounded-lg"></div>
          <div className="border border-2 border-fluorescent-green h-48 w-48 m-4 rounded-lg"></div>
          <div className="border border-2 border-fluorescent-green h-48 w-48 m-4 rounded-lg"></div>
          <div className="border border-2 border-fluorescent-green h-48 w-48 m-4 rounded-lg"></div>
          <div className="border border-2 border-fluorescent-green h-48 w-48 m-4 rounded-lg"></div>
          <div className="border border-2 border-fluorescent-green h-48 w-48 m-4 rounded-lg"></div>
          <div className="border border-2 border-fluorescent-green h-48 w-48 m-4 rounded-lg"></div>
          </div>
        </div>
      
    </>
  );
};

export default Recipe;
