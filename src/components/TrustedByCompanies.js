import Image from 'next/image'

export default function TrustedByCompanies() {
  return (
    <div className="bg-gradient-to-br from-[#0A0A0B] via-[#1A1A2E] to-[#16213E] text-white py-20 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-[#4D9CFF]">Trusted</span> by Global{' '}
            <span className="text-[#A855F7]">Companies</span>.
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.
            Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="text-4xl font-bold mb-2">500K</h3>
              <p className="text-gray-300">World Wide Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1M+</h3>
              <p className="text-gray-300">Downloads</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">865</h3>
              <p className="text-gray-300">Winning Award</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30 Q25 10 50 30 T100 30" stroke="url(#gradient)" strokeWidth="4" fill="none" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A90E2" />
                <stop offset="0.5" stopColor="#9B51E0" />
                <stop offset="1" stopColor="#FF6B6B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}