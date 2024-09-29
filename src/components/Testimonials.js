"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Jhon Abraham",
    company: "Founder @democompany",
    avatar: "/placeholder.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna."
  },
  {
    id: 2,
    name: "Devid Smith",
    company: "Founder @democompany",
    avatar: "/placeholder.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    company: "CEO @techstartup",
    avatar: "/placeholder.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna."
  },
  {
    id: 4,
    name: "Emily Davis",
    company: "CTO @innovatetech",
    avatar: "/placeholder.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna."
  },
  {
    id: 5,
    name: "Michael Brown",
    company: "Director @globalcorp",
    avatar: "/placeholder.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna."
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2))
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + (testimonials.length - 2)) % (testimonials.length - 2))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="bg-[#181c31] text-white sm:py-20 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#2C2C2E] text-sm font-semibold py-1 px-3 rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client's <span className="text-[#4D9CFF]">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
            Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[#2C2C2E] p-6 sm:px-40 md:px-40 rounded-lg shadow-lg h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#4D9CFF] p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#4D9CFF] p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                activeIndex === index ? 'bg-[#4D9CFF]' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#4D9CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#A855F7] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
    </section>
  )
}