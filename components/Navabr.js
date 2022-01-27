import Link from 'next/link'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <>
      <nav className="fixed inset-x-0 w-full text-gray-400 bg-zinc-900 shadow-sm shadow-black">
        <div className="max-w-6xl mx-auto ">
          <div className="flex items-center justify-between h-16 px-3 py-2 ">
            {/* Logo Link */}
            <div className="items-center space-x-4">
              <Link href="/">
                <a className="flex items-center space-x-3 hover:text-gray-300">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>Project Ebook</span>
                </a>
              </Link>
            </div>
            {/* Navigation Links */}
            <div className="hidden space-x-3 md:flex">
              <Link href="/">
                <a className="hover:text-gray-300">Home</a>
              </Link>
              <Link href="/shop">
                <a className="hover:text-gray-300">Shop</a>
              </Link>
              <Link href="/faq">
                <a className="hover:text-gray-300">FAQ</a>
              </Link>
              <Link href="/contact">
                <a className="hover:text-gray-300">Contact</a>
              </Link>
            </div>

            <MobileMenu />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
