"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import image1 from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"


const images = [
  { url: image1, alt: "Numerology Consultation 1" },
  { url:image2, alt: "Sacred Numbers Session" },
  { url: image3, alt: "Spiritual Guidance" },
  { url: image2 ,alt: "Numerology Charts" },
  { url:image1, alt: "Healing Energy" },
  { url: image3, alt: "Life Path Consultation" },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className="py-8 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
           <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            What My Clients <span className="text-teal-600">Says</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full mb-3"></div>
        
        </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {"A glimpse into our peaceful consultation space and healing sessions"}
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-teal-600 shadow-lg max-w-md mx-auto">
              <img
                src={images[currentIndex].url || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                className="w-full h-full object-contain"
              />

              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-teal-600/90 hover:bg-teal-700 backdrop-blur-sm rounded-full h-8 w-8 flex items-center justify-center text-white transition-all shadow-lg"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-teal-600/90 hover:bg-teal-700 backdrop-blur-sm rounded-full h-8 w-8 flex items-center justify-center text-white transition-all shadow-lg"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-teal-600/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-white shadow-lg">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            <div className="grid grid-cols-6 gap-1 mt-2 max-w-md mx-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative aspect-[4/5] rounded-md overflow-hidden border-2 transition-all ${
                    currentIndex === index
                      ? "border-teal-600 scale-105 shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
