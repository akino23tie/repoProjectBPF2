import { createRoot } from "react-dom/client";
import Header from "./layout/Header";
import "./assets/tailwind.css";
import Products from "./pages/Products";

createRoot(document.getElementById("root")).render(
  <div id="app-container" className="bg-gray-100 min-h-screen flex">
    <div id="layout-wrapper" className="flex flex-row flex-1">
      <div id="main-content" className="flex-1 p-4">
        <Header />
        <Products />
      </div>
    </div>
  </div>
);
