import { Link } from "react-router-dom";
import { LuBike } from "react-icons/lu";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo */}
                    <div>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-3xl font-bold text-white"
                        >
                            <LuBike className="text-green-500" />
                            InstaCart
                        </Link>

                        <p className="mt-5 text-gray-400 leading-7">
                            Fresh groceries delivered to your doorstep with quality,
                            affordability, and lightning-fast delivery.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="hover:text-green-500 transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/product" className="hover:text-green-500 transition">
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link to="/deals" className="hover:text-green-500 transition">
                                    Deals
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="hover:text-green-500 transition">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-green-500 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-5">
                            Customer Support
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link to="/faq" className="hover:text-green-500 transition">
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link to="/orders" className="hover:text-green-500 transition">
                                    My Orders
                                </Link>
                            </li>

                            <li>
                                <Link to="/privacy" className="hover:text-green-500 transition">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link to="/terms" className="hover:text-green-500 transition">
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link to="/support" className="hover:text-green-500 transition">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-5">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-400">
                            <p>📍 New York, USA</p>
                            <p>📞 +1 (123) 456-7890</p>
                            <p>📧 support@instacart.com</p>

                            <button className="mt-4 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl text-white transition">
                                Download App
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} InstaCart. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0 text-sm">
                        <Link to="/privacy" className="hover:text-green-500">
                            Privacy
                        </Link>

                        <Link to="/terms" className="hover:text-green-500">
                            Terms
                        </Link>

                        <Link to="/cookies" className="hover:text-green-500">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;