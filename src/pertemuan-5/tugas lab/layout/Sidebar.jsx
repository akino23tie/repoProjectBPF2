import ListMenu from "../components/ListMenu";

export default function Sidebar() {
  return (
    <div className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      <div className="flex flex-col">
        <span className="font-poppins text-[48px] text-gray-900">
          Sedap <b className="text-hijau">.</b>
        </span>
        <span className="font-semibold text-gray-400">Modern Admin Dashboard</span>
      </div>

      <div className="mt-10">
        <ListMenu />
      </div>

      {/* Footer tetap sama */}
      <div className="mt-auto">{/* ... */}</div>
    </div>
  );
}
