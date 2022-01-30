import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  let mobileMenu

  if (showMenu) {
    mobileMenu = (
      <>
        <div className="fixed top-0 right-0 grid h-screen text-gray-400 bg-zinc-800 md:hidden">
          <div className="box">
            {/* Close Button */}
            <div className="grid px-5 py-3 justify-items-end hover:text-gray-300">
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
              className="grid gap-5 py-5 justify-items-center"
              onClick={() => setShowMenu(false)}
            >
              <Link href="/">
                <a className="text-3xl hover:bg-gray-300 hover:text-gray-800">
                  Home
                </a>
              </Link>
              <Link href="/shop">
                <a className="text-3xl hover:bg-gray-300 hover:text-gray-800">
                  Shop
                </a>
              </Link>
              <Link href="/faq">
                <a className="text-3xl hover:bg-gray-300 hover:text-gray-800">
                  FAQ
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-3xl hover:bg-gray-300 hover:text-gray-800">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          <div className="grid items-end p-3 box">
            <span>Project Ebook - Copyright 2022</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="grid px-5 justify-items-end box md:hidden hover:text-gray-300">
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
