export default function CardCount({ icon, value, label, bgColor }) {
  return (
    <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
      <div className={`${bgColor} rounded-full p-4`}>{icon}</div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-gray-400">{label}</span>
      </div>
    </div>
  );
}
