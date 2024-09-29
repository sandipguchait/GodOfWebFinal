/* eslint-disable */

"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const companies = [
  { name: 'Netflix', logo: '/placeholder.svg' },
  { name: 'Amazon', logo: '/placeholder.svg' },
  { name: 'Apple', logo: '/placeholder.svg' },
  { name: 'Facebook', logo: '/placeholder.svg' },
  { name: 'Google', logo: '/placeholder.svg' },
  { name: 'Netflix', logo: '/placeholder.svg' },
  { name: 'Amazon', logo: '/placeholder.svg' },
]

export default function TrustedCompanies() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  }

  if (!isClient) {
    return null // Return null on server-side to prevent hydration mismatch
  }

  return (
    <div className="bg-[#181c31] text-white py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Trusted by Learners Working At Top Companies Like
        </h2>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={`${company.name}-${index}`} className="px-2">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={150}
                  height={50}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}