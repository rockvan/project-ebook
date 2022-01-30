import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navabr'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />

      <Navbar />
      <div
        className="grid min-h-screen pt-16 text-gray-300 bg-slate-900"
      >
        {children}
      </div>

      <Footer />
    </>
  )
}

export default Layout
