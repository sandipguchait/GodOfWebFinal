/* eslint-disable */

import Image from 'next/image'
import { Star, Youtube, Linkedin } from 'lucide-react'

const HeroSection = () => {
  const companyLogos = [
    { name: 'Netflix', src: '/placeholder.svg' },
    { name: 'TikTok', src: '/placeholder.svg' },
    { name: 'Nike', src: '/placeholder.svg' },
    { name: 'Twitch', src: '/placeholder.svg' },
    { name: 'Notion', src: '/placeholder.svg' },
    { name: 'Patreon', src: '/placeholder.svg' },
    { name: 'NVIDIA', src: '/placeholder.svg' },
    { name: 'Audible', src: '/placeholder.svg' },
    { name: 'Porsche', src: '/placeholder.svg' }
  ]

  return (
    <div className="bg-[#181c31] text-white p-8">
      <div className="max-w-7xl mx-auto mt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#4D9CFF]">Master</span> Modern<br />
              Web Development<br />
              With a <span className="text-[#A855F7]">Project</span><br />
              <span className="text-[#4D9CFF]">Based</span> Approach
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Gain real-world experience and land that dev job<br />
              you've always imagined
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative px-6 py-3 bg-gradient-to-r from-[#4ade80] via-[#3cba6f] to-[#2e9654] rounded-lg text-white font-semibold hover:opacity-90 transition duration-300 flex items-center justify-center overflow-hidden group">
                <span className="relative z-10">Ultimate Next.js 14 Course →</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:animate-wave-flow bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 w-[200%]" />
                </span>
              </button>
              <button className="relative px-6 py-3 bg-gradient-to-r from-[#A855F7] via-[#9d4ae8] to-[#8B5CF6] rounded-lg text-white font-semibold hover:opacity-90 transition duration-300 flex items-center justify-center overflow-hidden group">
                <span className="relative z-10">Dev Career Accelerator →</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:animate-wave-flow bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 w-[200%]" />
                </span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
              <div className="flex items-center justify-center w-full sm:w-auto">
                <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
              </div>
              <p className="text-sm text-gray-400 text-center sm:text-left">TrustScore 4.8 1,982 reviews</p>
              <div className="flex items-center justify-center w-full sm:w-auto gap-2">
                <Youtube className="w-5 h-5 text-red-500" />
                <span className="text-sm">900k</span>
                <Linkedin className="w-5 h-5 text-blue-500" />
                <span className="text-sm">200k</span>
              </div>
              <p className="text-sm text-gray-400 text-center sm:text-left">Followers & subscribers</p>
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0 space-y-8">
            <h2 className="text-2xl sm:text-left text-center md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Are these some <span className="text-[#4D9CFF]">nameless</span> websites?<br />
              Who are these <span className="text-[#A855F7]">companies</span>?<br />
              Take a <span className="text-[#4D9CFF]">look</span>.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {companyLogos.map((logo, index) => (
                <div key={index} className="bg-[#223150] p-4 rounded-lg flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={80}
                    height={80}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection