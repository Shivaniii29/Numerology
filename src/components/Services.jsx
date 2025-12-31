"use client"

import { Sparkles, TrendingUp, Shield, Heart, Calendar, Map } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Birth Chart Analysis",
    description:
      "Discover your cosmic blueprint and understand how planetary positions at your birth influence your life path and personality.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
    description:
      "Find the career path that aligns with your numerological blueprint for maximum success and fulfillment in your professional life.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Remedies & Solutions",
    description:
      "Receive personalized remedies and solutions to overcome challenges and enhance positive energies in your life through numerology.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Heart,
    title: "Relationship Compatibility",
    description:
      "Analyze compatibility with partners, friends, or family members through numerology and strengthen your emotional connections.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Calendar,
    title: "Personal Year Forecast",
    description:
      "Get insights into the energies and opportunities coming in your current personal year and plan accordingly for success.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Map,
    title: "Life Path Analysis",
    description:
      "Discover your life's purpose and the path you're meant to follow based on your birth date and numerological patterns.",
    color: "from-amber-500 to-amber-600",
  },
]

export default function ServicesNew() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
         <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
           Numerology <span className="text-teal-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full mb-3"></div>
         
        </div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive numerology services designed to guide you through life's journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-md`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
