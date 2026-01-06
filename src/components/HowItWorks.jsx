import { Clock, Zap, BookOpen, Star } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Clock,
      number: '01',
      title: 'Schedule Your Session',
      description: 'Fill out the contact form with your birth details and book a convenient time for your 1-hour online consultation via video call.',
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: BookOpen,
      number: '02',
      title: 'Life Path Analysis',
      description: 'I prepare a detailed analysis of your life using numerological principles to understand your unique life patterns.',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: Zap,
      number: '03',
      title: 'Deep Reading Session',
      description: 'During our session, I reveal insights about your life path, destiny number, strengths, challenges, and the opportunities ahead for your transformation.',
      color: 'bg-cyan-100 text-cyan-600',
    },
    {
      icon: Star,
      number: '04',
      title: 'Guidance & Recommendations',
      description: 'Receive personalized recommendations and actionable insights to align your life with your true purpose and achieve your goals.',
      color: 'bg-teal-100 text-teal-600',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-teal-600">Works</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple 4-step journey to discover your true potential through numerology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.color}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="text-4xl font-bold text-gray-200">{step.number}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">50 Minutes</div>
              <p className="text-gray-600">Comprehensive consultation</p>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-3xl font-bold text-teal-600 mb-2">Personal</div>
              <p className="text-gray-600">Tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">Online</div>
              <p className="text-gray-600">Accessible from anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
