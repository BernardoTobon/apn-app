import { useState } from "react";
import Link from "next/link";
import { BackArrow, Dates, Menu, RateUsIcon, RecipesIcon, UserHistoryIcon, Users } from "@/icons";

export default function NavDrawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex ">
      <div className="absolute z-20" onClick={() => setIsOpen(true)}>
        {Menu}
      </div>
      <div
        className={`${isOpen ? "max-w-[500px]" : "max-w-[0px]"}
            overflow-auto transition-all duration-500 ease-in-out h-screen bg-light-green z-20 fixed`}
      >
        <div className="border border-dark-green border-4 rounded-lg p-2 w-fit h-full">
          <div className="w-fit p-1" onClick={() => setIsOpen(false)}>
            <button>
              {BackArrow}
            </button>
          </div>
          <div
            className={`${
              isOpen
                ? "max-w-[500px] max-h-[400px] pt-20"
                : "max-w-[0px] max-h-[0px]]"
            }
            overflow-auto transition-all duration-500 ease-in-out`}
          >
            <div className="px-4 pb-4">
              <div className="grid grid-rows-4 gap-4">
                <div>
                  <Link className="flex items-center gap-7" href={"/User"}>
                    {Users}
                    Usuarios
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/Recipe"}>
                    {RecipesIcon}
                    Mis Recetas
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/calendar"}>
                    {Dates}
                    Calendario
                  </Link>
                </div>
                <div>
                  <Link
                    className="flex items-center gap-7"
                    href={"/usersHistory"}
                  >
                    {UserHistoryIcon}
                    Historia de usuarios
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/RateUs"}>
                    {RateUsIcon}
                    Calificanos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="">{children}</div>
      </div>
    </div>
  );
}
