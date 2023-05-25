import { useRouter } from "next/router";
import { RECIPE_TABS, USER_TABS } from "../../constants";

const MenuTabItem = ({ pathname, label }) => {
  const router = useRouter();
  return (
    <li className="mr-2">
      <a
        href={pathname}
        className={`${
          router.pathname == pathname ? "bg-gray-100" : ""
        } inline-block p-4 text-dark-green rounded-t-lg hover:bg-gray-50 active`}
      >
        {label}
      </a>
    </li>
  );
};

const TabMenu = ({ children }) => {
  const router = useRouter();
  const items = router.pathname.startsWith("/user") ? USER_TABS : RECIPE_TABS;
  if (
    !router.pathname.startsWith("/user") &&
    !router.pathname.startsWith("/recipe/recipeimage") &&
    !router.pathname.startsWith("/recipe/recipeingredient") &&
    !router.pathname.startsWith("/recipe/recipepreparation") &&
    !router.pathname.startsWith("/recipe/recipehashtags") && 
    !router.pathname.startsWith("/recipe/recipeview") 
  )
    return children;
  return (
    <>
      <div className="flex justify-center pt-6">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {items.map((item, index) => (
            <MenuTabItem key={index} {...item} />
          ))}
        </ul>
      </div>

      <div>{children}</div>
    </>
  );
};
export default TabMenu;
