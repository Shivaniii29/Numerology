"use client"

import { useState } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  { thumbnail: "/numerology-reading-vertical-video.jpg", title: "" },
  { thumbnail: "/life-path-number-explanation-vertical.jpg", title: "" },
  { thumbnail: "/client-testimonial-numerology-vertical.jpg", title: "" },
  { thumbnail: "/how-to-calculate-destiny-number-vertical.jpg", title: "" },
  { thumbnail: "/numerology-compatibility-vertical.jpg", title: "" },
  { thumbnail: "/yearly-forecast-numerology-vertical.jpg", title: "" },
]

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className="py-8 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Clients <span className="text-teal-600"> Stories</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full mb-3"></div>
         
        </div>

            
          </div>

          <div className="relative">
            <div className="relative">
              {/* Main Video Display */}
              <div className="relative overflow-hidden rounded-xl aspect-9/12 bg-teal-600 shadow-lg max-w-sm mx-auto">
                <img
                  src={videos[currentIndex].thumbnail || "/placeholder.svg"}
                  alt={videos[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 bg-teal-600/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-medium text-base text-balance">{videos[currentIndex].title}</h3>
                </div>
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-teal-600/90 hover:bg-teal-700 text-white rounded-full h-8 w-8 hidden lg:flex items-center justify-center transition-colors shadow-lg backdrop-blur-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-teal-600/90 hover:bg-teal-700 text-white rounded-full h-8 w-8 hidden lg:flex items-center justify-center transition-colors shadow-lg backdrop-blur-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-4 lg:hidden">
              <button
                onClick={goToPrevious}
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white rounded-lg h-8 w-8 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToNext}
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white rounded-lg h-8 w-8 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-1 mt-4 max-w-sm mx-auto">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative aspect-[9/16] rounded-md overflow-hidden border-2 transition-all ${
                    currentIndex === index
                      ? "border-teal-600 scale-105 shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-5 h-5 text-white drop-shadow-lg" fill="white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
