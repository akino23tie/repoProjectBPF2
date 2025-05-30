import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import CardCount from "../components/CardCount";

export default function Dashboard() {
  const cards = [
    {
      icon: <FaShoppingCart className="text-3xl text-white" />,
      value: 75,
      label: "Total Orders",
      bgColor: "bg-hijau",
    },
    {
      icon: <FaTruck className="text-3xl text-white" />,
      value: 175,
      label: "Total Delivered",
      bgColor: "bg-biru",
    },
    {
      icon: <FaBan className="text-3xl text-white" />,
      value: 40,
      label: "Total Canceled",
      bgColor: "bg-merah",
    },
    {
      icon: <FaDollarSign className="text-3xl text-white" />,
      value: "Rp.128",
      label: "Total Revenue",
      bgColor: "bg-kuning",
    },
  ];

  return (
    <div id="dashboard-container">
      <PageHeader title="Dashboard" breadcrumb={["Dashboard", "Order List"]} children={<button className="bg-hijau text-white px-4 py-2 rounded-lg">Add Button</button>} />
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <CardCount key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
