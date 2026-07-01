import React, { useEffect, useState } from "react";
import type { Product } from "../types";
import { dummyProducts } from "../assets/assets";
import { IoIosFlash } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

function FlashDeals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  const fetchProducts = () => {
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="h-14 w-14 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8 lg:px-12">
      {/* Banner */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl shadow-xl p-8 text-center text-white">

          <div className="flex justify-center items-center gap-3">
            <IoIosFlash className="text-5xl animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Flash Deals
            </h1>
            <IoIosFlash className="text-5xl animate-pulse" />
          </div>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-white/90">
            Limited Time Offer on your favorite and organic products.
            Grab them before they are gone.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-white rounded-2xl shadow hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-2"
            >
              <Link
                to={`/products/${product._id}`}
                className="flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative bg-gray-50 h-56 flex justify-center items-center overflow-hidden">
                  {product.originalPrice > product.price && (
                    <div className="mt-3">
                      <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                          100
                        )}
                        % OFF
                      </span>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">

                  <h2 className="font-semibold text-lg text-gray-800 line-clamp-2 min-h-[56px]">
                    {product.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-3">
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-600 font-medium">
                      {product.rating}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-bold text-green-600">
                      ${product.price.toFixed(2)}
                    </span>

                    {product.originalPrice > product.price && (
                      <span className="text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Discount */}


                  {/* Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default FlashDeals;