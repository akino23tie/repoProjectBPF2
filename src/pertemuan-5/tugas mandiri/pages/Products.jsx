import { useState, useEffect } from "react";

const productCategories = ["All Products", "Skincare", "Haircare", "Makeup", "Bath & Body"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error("Gagal memuat JSON:", err));
  }, []);

  const filteredProducts = selectedCategory === "All Products" ? productsData : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Explore Our Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform offers an extensive selection of skincare and makeup products tailored to fulfill all your beauty needs. We aim to deliver a luxurious shopping experience with top-tier products from PT Paragon Corp, focused on
          innovation and genuine beauty.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {productCategories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${selectedCategory === category ? "bg-hijau text-white" : "bg-white text-black border-gray-300"} hover:bg-hijau hover:text-white transition`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div key={index} className="border rounded-xl p-4 text-center hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <h3 className="font-semibold text-sm">{product.title}</h3>
            <p className="text-xs text-gray-500">{product.brand}</p>
            <p className="text-base font-semibold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
