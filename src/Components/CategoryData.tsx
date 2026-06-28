import { categoriesData } from "../assets/assets";
import { Link } from "react-router-dom";

function CategoryData() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-14">
            {/* Heading */}
            <div className="text-start mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Browse Categories
                </h1>

                <p className="text-gray-500 mt-2">
                    Find exactly what you need
                </p>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

                {categoriesData.slice(0, 6).map((category, index) => (
                    <Link to={`/products/${category.slug}`}>
                        <div


                            key={index}
                            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-14 h-14 object-contain"
                                />
                            </div>

                            <p className="mt-4 text-gray-800 font-semibold text-center">
                                {category.name}
                            </p>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    );
}

export default CategoryData;