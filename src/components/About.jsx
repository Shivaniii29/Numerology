import { Quote, Star, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet the <span className="text-teal-600">Numerologist</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Quote className="w-8 h-8 text-teal-600 flex-shrink-0 mt-1" />
              <p className="text-2xl sm:text-3xl font-serif italic text-gray-700 leading-relaxed">
                "Numbers hold the key to understanding the universe within us. When we decode them, we unlock our true potential and find the path to inner harmony."
              </p>
            </div>

            <div className="border-t-2 border-teal-200 pt-8">
              {/* <h3 className="text-3xl font-bold text-gray-900 mb-4">Upasna U Malik</h3> */}
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
               Welcome! I'm a passionate numerologist dedicated to helping people discover their true potential through the ancient science of numbers. With over 2 years of experience and 250+ successful consultations, I've witnessed the transformative power of numerology in countless lives.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
               My consultants don't just appreciate my work—they love it! Each session is personalized, insightful, and designed to provide you with actionable guidance for your life journey.

Whether you're seeking clarity about your career, relationships, or life purpose, numerology offers profound insights that can illuminate your path forward.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                  <Users className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>
                  <div className="text-gray-600">Happy Souls</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                  <Clock className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                  <Star className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">Trusted</div>
                  <div className="text-gray-600">Expert Guidance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
