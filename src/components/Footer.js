import Link from 'next/link'
import { Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0B] to-[#1A1A2E] text-white py-12 px-6 sm:px-8 lg:px-16 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link href="/" className="text-3xl font-bold flex items-center mb-6 group">
              <span className="text-[#4D9CFF] mr-2 group-hover:rotate-180 transition-transform duration-300">●</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4D9CFF] to-[#A855F7]">
                Solid
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            </p>
            <h3 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Contact</h3>
            <a href="mailto:hello@solid.com" className="text-xl hover:text-[#4D9CFF] transition-colors duration-300 inline-block">
              hello@solid.com
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#4D9CFF]">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Product', 'Careers', 'Pricing'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#4D9CFF]">Support</h3>
              <ul className="space-y-3">
                {['Company', 'Press media', 'Our Blog', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-gray-400">
            This site is not part of and/or endorsed by Facebook™. Facebook™ is a trademark of Facebook™, Inc.
          </div>
          <p className="text-gray-400 text-center mb-4">© 2024 Solid. All rights reserved</p>
          <div className="flex space-x-6">
            {['facebook', 'twitter', 'linkedin', 'behance'].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4D9CFF] transition-colors duration-300"
              >
                <span className="sr-only">{social}</span>
                <i className={`fab fa-${social} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#4D9CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#A855F7] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
    </footer>
  )
}