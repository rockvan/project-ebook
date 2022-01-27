import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  let mobileMenu

  if (showMenu) {
    mobileMenu = (
      <>
        <div className="fixed top-0 right-0 flex flex-col justify-between h-screen max-w-lg px-3 py-2 text-gray-400 bg-zinc-800 md:hidden">
          <div>
            {/* Close Button */}
            <div className="flex justify-end mt-1 hover:text-gray-300">
              <button onClick={() => setShowMenu(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* mobile menu links */}
            <div
              className="flex flex-col mt-16 space-y-4 "
              onClick={() => setShowMenu(false)}
            >
              <Link href="/">
                <a className="px-2 text-3xl hover:bg-gray-300 hover:text-gray-800">
                  Home
                </a>
              </Link>
              <Link href="/shop">
                <a className="px-2 text-3xl hover:bg-gray-300 hover:text-gray-800">
                  Shop
                </a>
              </Link>
              <Link href="/faq">
                <a className="px-2 text-3xl hover:bg-gray-300 hover:text-gray-800">
                  FAQ
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-2 text-3xl hover:bg-gray-300 hover:text-gray-800">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          <div className="">
            <span>Project Ebook - Copyright 2022</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="items-center md:hidden hover:text-gray-300">
      <button onClick={() => setShowMenu(!showMenu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {mobileMenu}
    </div>
  )
}

export default MobileMenu
