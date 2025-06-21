'use client'

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)

  const navItems = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">Logo</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="text-gray-700 hover:text-blue-800 transition"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="text-2xl font-bold text-blue-800">
          <Link href="#">Sign in</Link>
        </div>


        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {openMenu && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="text-gray-700 hover:text-blue-800 transition"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
