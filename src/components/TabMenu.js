import { useRouter } from "next/router";

const UserTabs = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <div className="flex justify-center pt-2 ">
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li class="mr-2">
            <a
              href="/user/data"
              aria-current="page"
              class={`${router.pathname == "/user/data"?"bg-gray-100":""} inline-block p-4 text-dark-green rounded-t-lg hover:bg-gray-50 active`}
            >
              Datos
            </a>
          </li>
          <li class="mr-2">
            <a
              href="/user/userhistory"
              class={`${router.pathname == "/user/userhistory"?"bg-gray-100":""} inline-block p-4 text-dark-green rounded-t-lg hover:bg-gray-50 active `}
            >
              Historia clinica
            </a>
          </li>
          <li class="mr-2">
            <a
              href="/user/lifestyle"
              class={`${router.pathname == "/user/lifestyle"?"bg-gray-100":""} inline-block p-4 text-dark-green rounded-t-lg hover:bg-gray-50 active`}
            >
              Estilo de vida
            </a>
          </li>
          <li class="mr-2">
            <a
              href="/user/goals"
              class={`${router.pathname == "/user/goals"?"bg-gray-100":""} inline-block p-4 text-dark-green rounded-t-lg hover:bg-gray-50 active`}
            >
              Objetivos
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 rounded-t-lg text-dark-green hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Recomendaciones
            </a>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
};

export default UserTabs;
