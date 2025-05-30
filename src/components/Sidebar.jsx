import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import ListMenu from "./ListMenu";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive ? "text-hijau bg-green-200 font-extrabold" : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"}`;

  return (
    <div className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo */}
      <div className="flex flex-col">
        <span className="font-poppins text-[48px] text-gray-900">
          Sedap <b className="text-hijau">.</b>
        </span>
        <span className="font-semibold text-gray-400">Modern Admin Dashboard</span>
      </div>

      {/* List Menu */}
      <ListMenu />

      {/* Navigation Links */}
      <div>
        {/* Link Error 400 */}
        <NavLink to="/error/400" state={{ errorCode: "400" }} className={menuClass}>
          <AiOutlineWarning className="text-xl" />
          <span>Error 400</span>
        </NavLink>

        {/* Link Error 401 */}
        <NavLink to="/error/401" state={{ errorCode: "401" }} className={menuClass}>
          <AiOutlineWarning className="text-xl" />
          <span>Error 401</span>
        </NavLink>

        {/* Link Error 403 */}
        <NavLink to="/error/403" state={{ errorCode: "403" }} className={menuClass}>
          <AiOutlineWarning className="text-xl" />
          <span>Error 403</span>
        </NavLink>

        {/* Link User List */}
        <NavLink to="userlist" className={menuClass}>
          <BsFillPersonFill className="text-xl" />
          <span>User List</span>
        </NavLink>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
          <div className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
              <span>Add Menus</span>
            </div>
          </div>
          <img className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
        </div>
        <span className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
