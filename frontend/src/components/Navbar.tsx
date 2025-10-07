import { ShoppingCart, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-xl bg-white/30 rounded-full shadow-md fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-black">QuickCart</h1>
      </div>

      <div className="flex items-center bg-white/70 rounded-full px-4 py-2 w-72 shadow-inner">
        <Search className="text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent ml-2 outline-none w-full text-sm text-gray-700"
        />
      </div>

      <div className="flex items-center gap-4">
        <Heart className="cursor-pointer hover:text-red-500" />
        <Link to="/cart">
          <div className="relative">
            <ShoppingCart className="cursor-pointer hover:text-black" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">2</span>
          </div>
        </Link>
        <img
          src="https://api.dicebear.com/8.x/avataaars/svg?seed=Ashutosh"
          alt="User"
          className="w-9 h-9 rounded-full border"
        />
      </div>
    </nav>
  );
}
