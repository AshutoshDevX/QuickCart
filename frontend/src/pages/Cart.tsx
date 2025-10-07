import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Cart() {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = async () => {
    await axios.post("http://localhost:3000/api/checkout", { items });
    alert("Order placed successfully!");
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <Navbar />
      <div className="pt-28 px-10">
        <h1 className="text-3xl font-bold mb-5 text-center">Your Shopping Cart</h1>
        {items.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg p-6">
            {items.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-300 py-3"
              >
                <div className="flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-lg" />
                  <div>
                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(updateQuantity({ id: item.id, qty: +e.target.value }))
                    }
                    className="border rounded-lg w-16 text-center py-1"
                  />
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-6 text-lg font-semibold">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-green-600 text-white rounded-full py-3 hover:bg-green-700 transition"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
