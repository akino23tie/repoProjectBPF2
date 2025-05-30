import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineViewList } from "react-icons/hi";

export default function ListMenu() {
  const menus = [
    { icon: <AiOutlineHome className="mr-4 text-xl" />, label: "Dashboard" },
    { icon: <HiOutlineViewList className="mr-4 text-xl" />, label: "Orders" },
    { icon: <BsPeopleFill className="mr-4 text-xl" />, label: "Customers" },
  ];

  return (
    <ul id="menu-list" className="space-y-3">
      {menus.map((menu, index) => (
        <li key={index}>
          <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            {menu.icon}
            {menu.label}
          </div>
        </li>
      ))}
    </ul>
  );
}
