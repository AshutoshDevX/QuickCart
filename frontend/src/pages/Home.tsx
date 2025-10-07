import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Product } from "../types/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Navbar from "../components/Navbar";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 relative">
      <Navbar />
      <div className="pt-28 px-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center"
        >
          Explore Our Featured Products
        </motion.h1>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="rounded-2xl object-cover h-56 w-full"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
                <p className="text-gray-500 mt-1">₹{p.price}</p>
              </div>
              <button
                onClick={() => dispatch(addToCart(p))}
                className="mt-5 bg-black text-white rounded-full py-2 hover:bg-gray-800 transition-all"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
