import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineViewList } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive ? "text-hijau bg-green-200 font-extrabold" : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"}`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <AiOutlineHome className="mr-4 text-xl" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            <HiOutlineViewList className="mr-4 text-xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            <BsPeopleFill className="mr-4 text-xl" />
            Customers
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
