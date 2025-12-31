import { useState } from "react";
import { Calculator as CalcIcon, Sparkles } from "lucide-react";

export default function Calculator() {
  const [birthdate, setBirthdate] = useState("");
  const [destinyNumber, setDestinyNumber] = useState(null);
  const [description, setDescription] = useState("");

  const destinyDescriptions = {
    1: "You are a natural leader with strong independence and originality. Your path is about pioneering new ideas and taking initiative.",
    2: "You are a peacemaker and diplomat. Your destiny involves cooperation, partnerships, and bringing harmony to situations.",
    3: "You are creative and expressive. Your path is about communication, artistic expression, and bringing joy to others.",
    4: "You are practical and grounded. Your destiny involves building solid foundations, organization, and creating stability.",
    5: "You are adventurous and dynamic. Your path is about embracing change, freedom, and experiencing life fully.",
    6: "You are nurturing and responsible. Your destiny involves service, family, and creating harmony in your community.",
    7: "You are analytical and spiritual. Your path is about seeking truth, wisdom, and deep understanding.",
    8: "You are ambitious and powerful. Your destiny involves material success, authority, and achieving great things.",
    9: "You are compassionate and humanitarian. Your path is about service to humanity and completing cycles.",
  };

  const calculateDestinyNumber = () => {
    if (!birthdate) return;

    const dateStr = birthdate.replace(/-/g, "");
    let sum = 0;

    for (const digit of dateStr) {
      sum += parseInt(digit, 10);
    }

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }

    setDestinyNumber(sum);
    setDescription(
      destinyDescriptions[sum] ||
        destinyDescriptions[sum > 9 ? Math.floor(sum / 11) : sum]
    );
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Destiny Number <span className="text-teal-600">Calculator</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">
            Discover your destiny number and unlock the secrets of your life path
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
              <CalcIcon className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="birthdate"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Enter Your Birth Date
              </label>
              <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="w-full px-4 py-4 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-600 text-lg"
              />
            </div>

            <button
              onClick={calculateDestinyNumber}
              className="w-full bg-teal-600 text-white px-8 py-4 rounded-xl hover:bg-teal-700 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Calculate My Destiny Number
            </button>

            {destinyNumber !== null && (
              <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-amber-500 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Your Destiny Number
                  </h3>
                  <Sparkles className="w-6 h-6 text-amber-500 ml-2" />
                </div>

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-teal-600 text-white text-5xl font-bold rounded-full shadow-lg">
                    {destinyNumber}
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {description}
                </p>

                <div className="mt-6 p-4 bg-teal-50 rounded-xl">
                  <p className="text-center text-gray-600">
                    Want a detailed personalized reading? Book a session to dive
                    deeper into your numerology chart!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
