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
        <Link
          href={"#"}
        >
          {AddIcon}
        </Link>
      </div>
    </>
  );
};

export default Recipe;
