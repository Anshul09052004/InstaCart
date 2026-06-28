import { HiOutlineMail } from "react-icons/hi";

function Newsletter() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto bg-green-200 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center p-6 sm:p-8 lg:p-14">

          {/* Left */}
          <div className="text-black">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center mb-5">
              <HiOutlineMail className="text-2xl sm:text-3xl text-green-600" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Join Our Newsletter
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-7 text-gray-700">
              Subscribe to receive exclusive offers, fresh arrivals,
              healthy recipes and weekly discounts directly in your inbox.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center sm:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">10K+</h3>
                <p className="text-sm text-gray-700">Subscribers</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">20%</h3>
                <p className="text-sm text-gray-700">Welcome Discount</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Weekly</h3>
                <p className="text-sm text-gray-700">Fresh Updates</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full">
            <h3 className="text-2xl font-bold text-gray-800">
              Stay Updated
            </h3>

            <p className="text-gray-500 mt-2">
              Enter your email and never miss our latest deals.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700 transition"
              >
                Subscribe Now
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;