import { ArrowRight } from 'lucide-react'

export default function JoinUs() {
  return (
    <div className="bg-gradient-to-br from-[#0A0A0B] via-[#1A1A2E] to-[#16213E] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[#4D9CFF]">Join</span> With Us Today &{' '}
            <span className="text-[#4D9CFF]">Increase</span> Your{' '}
            <span className="text-[#A855F7]">Productivity</span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
            Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full inline-flex items-center hover:bg-gray-200 transition duration-300 text-lg">
            Sign up free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
    </div>
  )
}