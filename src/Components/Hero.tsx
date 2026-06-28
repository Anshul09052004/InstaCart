import heroImg from "../Assets/hero_bg.jpeg";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Image */}
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-[500px] sm:h-[550px] lg:h-[650px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-6 sm:px-10 lg:px-16 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium">
              <FaLeaf />
              Farm Fresh & Organic
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Nourish Your Home
              <br />
              With Earth's Finest
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-gray-200 leading-7">
              Fresh, organic groceries delivered from local farms to your
              doorstep. Quality you can taste, convenience you deserve.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/product"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                Shop Now
                <FaArrowRightLong />
              </Link>

              <Link
                to="/product"
                className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition"
              >
                Browse Category
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;