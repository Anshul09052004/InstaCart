import type { Product } from "../types";
import { dummyProducts } from "../assets/assets";
import { useEffect, useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function PopularProduct() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(dummyProducts.slice(0, 10));
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 py-14">
            {/* Heading */}
            <div className="text-start mb-10">
                <h2 className="text-4xl font-bold text-gray-800">
                    Popular Products
                </h2>
                <p className="text-gray-500 mt-2">
                    Fresh products picked just for you
                </p>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">


                {products.map((product) => (

                    <div

                        key={product._id}
                        className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-500 hover:shadow-lg transition-all duration-300"
                    ><Link to={`/products/${product._id}`}>
                            {/* Product Image */}
                            <div className="bg-gray-50 rounded-lg h-48 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Name */}
                            <h3 className="mt-4 font-semibold text-gray-800 line-clamp-2 h-12">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mt-2">
                                <FaStar className="text-yellow-400 text-sm" />
                                <span className="text-sm">{product.rating}</span>
                            </div>

                            {/* Price */}
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-xl font-bold text-gray-900">
                                    ${product.price.toFixed(2)}
                                </span>

                                <span className="text-sm line-through text-gray-400">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            </div>

                        </Link>
                    </div>

                ))}
            </div>
        </section>
    );
}

export default PopularProduct;