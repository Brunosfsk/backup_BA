import { Sandwich, Pizza, Cake, FishSymbol, CupSoda } from "lucide-react"; // Ícones do ShadCN
import React from 'react';

const MenuScroll = () => {
    const items = [
        { category: "Lanches", icon: <Sandwich className="w-6 h-6" /> },
        { category: "Pizzas", icon: <Pizza className="w-6 h-6" /> },
        { category: "Bolos", icon: <Cake className="w-6 h-6" /> },
        { category: "Bebidas", icon: <CupSoda className="w-6 h-6" /> },
        { category: "Japonesa", icon: <FishSymbol className="w-6 h-6" /> },
      ];

  return (
    <div
      className="w-full overflow-x-auto p-2"
    >
        <div className="text-center w-full text-red-700 font-semibold mb-2">
        <h2>Menu</h2>
        </div>
      <div className="flex space-x-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-black flex flex-col justify-center items-center whitespace-nowrap px-3 py-2 bg-[#F5F7F8] rounded-lg shadow-md hover:bg-red-700 hover:text-white transition duration-300"
          >
            {item.icon}
            {item.category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuScroll;


// cinza logo BA #5b595a