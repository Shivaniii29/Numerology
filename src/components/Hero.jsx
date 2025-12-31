import { Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 pt-32 pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-gray-700 font-medium">
              Alignment • Inner Peace
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-gray-900">Healing with </span>
            <span className="text-teal-700">Numbers</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-light max-w-4xl mx-auto">
            When numbers align, peace follows
          </p>

          {/* Highlight Card */}
          <div className="bg-white max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
            <p className="text-xl sm:text-2xl text-gray-700">
              Numbers are not just digits
            </p>
            <p className="text-3xl sm:text-4xl font-semibold text-teal-600">
              They are energy
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Numerology helps you understand your life with clarity & calm
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your Session
            </button>

            <button
              onClick={() => scrollToSection("calculator")}
              className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all text-lg font-medium shadow-lg hover:shadow-xl border-2 border-teal-600 transform hover:-translate-y-1"
            >
              Calculate Destiny Number
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
