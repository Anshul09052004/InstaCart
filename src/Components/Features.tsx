import { heroSectionData } from "../assets/assets";

function Features() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {heroSectionData.hero_features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-green-500 transition-all duration-300"
                    >
                        {/* Icon */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl sm:text-3xl">
                            <feature.icon />
                        </div>

                        {/* Title */}
                        <h2 className="mt-4 text-base sm:text-xl font-semibold text-gray-800">
                            {feature.title}
                        </h2>

                        {/* Description */}
                        <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-6">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;