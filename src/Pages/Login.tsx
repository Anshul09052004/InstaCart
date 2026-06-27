import { useState } from "react";
import heroBg from "../Assets/hero_bg.jpeg";
import { LuBike } from "react-icons/lu";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Login() {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Side */}
      <div className="relative hidden lg:flex w-1/2">
        <img
          src={heroBg}
          alt="Hero"
          className="w-full h-screen object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-10">
          <h1 className="text-5xl font-bold text-white mb-5">
            Welcome Back to InstaCart
          </h1>

          <p className="text-lg text-gray-200 max-w-lg leading-7">
            Fresh groceries and organic products delivered straight to your
            doorstep with fast and reliable delivery.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4 ml-10">
            <div className="p-3 rounded-full">
              <LuBike className="text-4xl " />
            </div>

            <h2 className="text-2xl font-bold  text-gray-800">
              InstaCart
            </h2>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800">
            {isLoginState ? "Sign in to your Account " : "sign up to InstaCart"}
          </h1>

          <p className="text-gray-500 mt-2 mb-6">
            {isLoginState
              ? "Login to continue shopping."
              : "Create your account and start shopping."}
          </p>

       
         <button
  type="button"
  onClick={() => setIsLoginState(!isLoginState)}
  className="text-gray-500 font-medium mb-6"
>
  {isLoginState ? (
    <>
      Don't have an account?{" "}
      <span className="text-green-500 font-semibold hover:underline">
        Sign Up
      </span>
    </>
  ) : (
    <>
      Already have an account?{" "}
      <span className="text-green-500 font-semibold hover:underline">
        Sign In
      </span>
    </>
  )}
</button>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            {!isLoginState && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <div className="flex items-center border rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-green-500">
                  <FaUser className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full ml-3 outline-none"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <div className="flex items-center border rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <MdEmail className="text-gray-400 text-xl" />

                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full ml-3 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="flex items-center border rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <FaLock className="text-gray-400" />

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full ml-3 outline-none"
                />
              </div>
            </div>

        

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 transition duration-300 text-white py-3 rounded-lg font-semibold disabled:opacity-60"
            >
              {loading
                ? "Please Wait..."
                : isLoginState
                ? "Sign In"
                : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;