import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    }
    addToCart(product);
  };

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
      <div className="relative mx-3 mt-3 h-60 overflow-hidden rounded-xl">
        {product.image && (
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={product.image}
            alt={product.name || "Product image"}
          />
        )}
      </div>

      <div className="mt-4 px-5 pb-5 text-white">
        <h5 className="text-xl font-semibold tracking-tight truncate">
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <span className="text-3xl font-bold text-emerald-400">
            ₹{product.price}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
          className="flex items-center justify-center w-full rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-colors"
        >
          <ShoppingCart size={20} className="mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
