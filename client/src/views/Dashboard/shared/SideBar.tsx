import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/navigation";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

interface SidebarItem {
  key: string;
  label: string;
  path: string;
  icon: JSX.Element;
}

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-lightblue hover:text-blue hover:no-underline active:bg-lightblue rounded-sm text-base";

export default function SideBar() {
  return (
    <div className="flex flex-col bg-blue w-60 p-3 text-lightblue text-sm  uppercase">
      <div className="flex items-center gap-2 px-1 py-3">
        <span className="ml-1 text-texto text-lg font-Poppins">
          Bustillo 7500
        </span>
      </div>
      <div className=" py-8 flex flex-1 flex-col gap-0.5 font-Poppins-300">
        {DASHBOARD_SIDEBAR_LINKS.map((item: SidebarItem) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-lightblue">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
        <div className={classNames("text-texto cursor-pointer", linkClasses)}>
          <span className="text-xl">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SideBarLink({ item }: { item: any }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-texto " : "",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span>{item.label}</span>
    </Link>
  );
}
