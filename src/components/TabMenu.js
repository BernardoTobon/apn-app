import { useRouter } from "next/router";
import { USER_TABS } from "../../constants";

const MenuTabItem = ({ pathname, label }) => {
  const router = useRouter()
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

const UserTabs = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.pathname.startsWith("/user") && (
        <div className="flex justify-center pt-2 ">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            {
              USER_TABS.map(
                (item, index)=><MenuTabItem key={index} {...item}/>
              )
            }
            
          </ul>
        </div>
      )}
      <div>{children}</div>
    </>
  );
};
export default UserTabs;
