import Link from 'next/link'
import Newsletter from './NewsletterForm'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center text-gray-400 bg-zinc-900 shadow-lg shadow-black">
      <div className="justify-center lg:flex">
        {/* Newsletter form*/}
        <Newsletter />
        {/* footer Menu */}
        <div className="grid justify-around grid-cols-2 my-2 lg:w-6/12 md:flex">
          {/* Links */}
          <div className="flex flex-col w-36">
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
          <div className="flex flex-col w-36">
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
          <div className="flex flex-col w-36">
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
