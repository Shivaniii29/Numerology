import { useState } from "react";
import { Send, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    birthtime: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hi, I'm ${formData.name}

Email: ${formData.email}
Phone: ${formData.phone}
Birth Date: ${formData.birthdate}
Birth Time: ${formData.birthtime}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919990123500?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Begin Your{" "}
            <span className="text-teal-600">Transformation</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">
            Fill out the form below and connect with me on WhatsApp
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 sm:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-600 text-lg"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-600 text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-600 text-lg"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            {/* Birth Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="birthdate"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Birth Date *
                </label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  required
                  value={formData.birthdate}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-600 text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="birthtime"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Birth Time *
                </label>
                <input
                  type="time"
                  id="birthtime"
                  name="birthtime"
                  required
                  value={formData.birthtime}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-600 text-lg"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-teal-200 rounded-xl focus:outline-none focus:border-teal-600 text-lg resize-none"
                placeholder="Tell me what you'd like to explore in your numerology reading..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white px-8 py-5 rounded-xl hover:bg-teal-700 transition-all text-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <Phone className="w-6 h-6" />
              <span>Connect on WhatsApp</span>
              <Send className="w-6 h-6" />
            </button>

           
          </form>
        </div>
      </div>
    </section>
  );
}
