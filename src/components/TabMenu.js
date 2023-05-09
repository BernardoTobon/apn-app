

const UserTabs = ({children}) => {
    return <>
    <div className="flex justify-center pt-2 ">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="mr-2">
        <a href="#" aria-current="page" class="inline-block p-4 text-dark-green bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Datos</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg text-dark-green hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Histotia clinica</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg text-dark-green  hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Estilo de vida</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg text-dark-green hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Objetivos</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg text-dark-green hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Recomendaciones</a>
    </li>
</ul>
</div>
<div>
    {children}
</div>
    </>
}

export default UserTabs