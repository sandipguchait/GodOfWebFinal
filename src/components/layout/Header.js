/* eslint-disable */

"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { HEADER_TITLE, NAV_LINKS, BUTTON_LABELS } from '@/constants'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const headerStyle = {
    boxShadow: '0 4px 6px -1px rgba(0, 123, 255, 0.1), 0 2px 4px -1px rgba(0, 123, 255, 0.06)'
  };

  return (
    <header 
      className="bg-[#111] text-white p-4 sticky top-0 z-50"
      style={headerStyle}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link href="/" className="text-2xl font-bold">
          {HEADER_TITLE}
        </Link>
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={link.className}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button 
          onClick={toggleMenu} 
          className="md:hidden"
          aria-label={isMenuOpen ? BUTTON_LABELS.MENU_CLOSE : BUTTON_LABELS.MENU_OPEN}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 px-4 md:px-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={link.className}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header