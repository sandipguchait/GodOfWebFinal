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
              <button className="px-6 py-3 bg-gradient-to-r from-[#4D9CFF] to-[#3E7EFF] rounded-lg text-white font-semibold hover:opacity-90 transition duration-300 flex items-center justify-center">
                Ultimate Next.js 14 Course →
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] rounded-lg text-white font-semibold hover:opacity-90 transition duration-300 flex items-center justify-center">
                Dev Career Accelerator →
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-green-500" fill="currentColor" />
                <Star className="w-5 h-5 text-green-500" fill="currentColor" />
                <Star className="w-5 h-5 text-green-500" fill="currentColor" />
                <Star className="w-5 h-5 text-green-500" fill="currentColor" />
                <Star className="w-5 h-5 text-green-500" fill="currentColor" />
              </div>
              <p className="text-sm text-gray-400">TrustScore 4.8 1,982 reviews</p>
              <div className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-500" />
                <span className="text-sm">900k</span>
                <Linkedin className="w-5 h-5 text-blue-500" />
                <span className="text-sm">200k</span>
              </div>
              <p className="text-sm text-gray-400">Followers & subscribers</p>
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Are these some nameless websites? Who are these companies?<br />
            Take a look.
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