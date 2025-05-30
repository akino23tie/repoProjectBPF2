import { FaGem } from "react-icons/fa";
import CardCount from "../components/CardCount.jsx";
import { FaSearch } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Header() {
  const cards = [{ icon: <FaGem className="text-3xl text-black" />, label: "Paragon", bgColor: "bg-white" }, { label: "Shop" }, { label: "Contact" }, { label: "About" }];

  return (
    <div id="dashboard-container">
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <CardCount key={index} {...card} />
        ))}
      </div>

      <div id="header-container" className="flex justify-between items-center p-4">
        {/* Search Bar */}
        <div id="search-bar" className="relative w-full max-w-lg">
          <input id="search-input" className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none" type="text" placeholder="Search Here..." />
          <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
        </div>
        <PageHeader children={<button className="bg-hijau text-white px-4 py-2 rounded-lg">View Chart</button>}></PageHeader>
      </div>
    </div>
  );
}
