import Link from 'next/link'
import Newsletter from './form-comp/NewsletterForm'

const Footer = () => {
  return (
    <footer className="container min-w-full text-gray-400 shadow-lg place-content-center bg-zinc-900">
      <div className="grid md:grid-cols-2">
        {/* Newsletter form*/}
        <Newsletter />
        {/* footer Menu */}
        <div className="grid grid-cols-2 gap-3 px-10 py-1 lg:grid-cols-3">
          {/* Links */}
          <div className="grid">
            <h2 className="text-2xl">LINKS</h2>
            <hr />
            <Link href="/about">
              <a className="hover:text-gray-300">About</a>
            </Link>
            <Link href="/privacy">
              <a className="hover:text-gray-300">Privacy</a>
            </Link>
            <Link href="/dmca">
              <a className="hover:text-gray-300">DMCA</a>
            </Link>
            <Link href="/refund">
              <a className="hover:text-gray-300">Refunds</a>
            </Link>
          </div>
          {/* Menus */}
          <div className="grid ">
            <h2 className="text-2xl">MENU</h2>
            <hr />
            <Link href="/">
              <a className="hover:text-gray-300">Home</a>
            </Link>
            <Link href="/shop">
              <a className="hover:text-gray-300">Shop</a>
            </Link>
            <Link href="/faq">
              <a className="hover:text-gray-300">FAQ</a>
            </Link>
            <Link href="/donate">
              <a className="hover:text-gray-300">Donate</a>
            </Link>
          </div>
          {/* contact */}
          <div className="">
            <h2 className="text-2xl">CONTACT</h2>
            <hr />
            <a
              className="hover:text-gray-300"
              href="mailto:ebookhunter.pdf@gmail.com"
            >
              ebookhunter.pdf@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <p>Project Ebook - Copyright 2022</p>
      </div>
    </footer>
  )
}

export default Footer
