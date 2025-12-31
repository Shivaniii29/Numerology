import { Sparkles, Instagram, Facebook, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-teal-400" />
              <div className="flex flex-col">
                  <i>Upasna Malik</i>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Discover your life's purpose through the ancient wisdom of
              numerology. Transform your journey with clarity and peace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "services", "calculator", "pricing", "contact"].map(
                (section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 hover:text-teal-400 transition-colors capitalize"
                    >
                      {section}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/919990123500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9990123500</span>
              </a>

              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>via WhatsApp</span>
              </div>

              <div className="flex space-x-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Healing with Numbers by Upasana Malik.
              All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Guiding 250+ souls to their true path
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
