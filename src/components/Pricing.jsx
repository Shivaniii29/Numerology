"use client"

import { Check, Video } from "lucide-react"

export default function Pricing() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const features = [
    "Comprehensive numerology reading",
    "Life path analysis",
    "Destiny number insights",
    "Personal year forecast",
    "Career & relationship guidance",
    "Name analysis",
    "Q&A session",
    "Personalized recommendations",
  ]

  return (
    <section
      id="pricing"
      className="min-h-[80vh] flex items-center px-4 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-12"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Investment in Your <span className="text-teal-600">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full mb-3"></div>
          <p className="text-lg text-gray-600">Transform your life with a personalized numerology consultation</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-teal-600">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-3">
              <Video className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">1-Hour Online Session</h3>
            <p className="text-teal-100">Personal Video Consultation</p>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center mb-1">
                <span className="text-xl font-semibold text-gray-600">₹</span>
                <span className="text-5xl font-bold text-gray-900">2,111</span>
              </div>
              <p className="text-gray-600">One-time investment</p>
            </div>

            <div className="space-y-2.5 mb-6">
              <h4 className="font-semibold text-gray-900 text-lg mb-3">What You'll Receive:</h4>

              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-teal-600 text-white px-6 py-3.5 rounded-xl hover:bg-teal-700 transition-all text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your Session Now
            </button>

            <div className="mt-4 p-3 bg-teal-50 rounded-xl text-center">
              <p className="text-gray-700 font-medium text-sm">
                Join 250+ satisfied clients who found clarity and purpose
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Sessions are conducted via video call at your convenience</p>
        </div>
      </div>
    </section>
  )
}
