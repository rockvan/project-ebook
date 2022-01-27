import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navabr'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className=" container mx-auto px-4 flex flex-col justify-start min-h-screen items-center">
        <main className=" flex flex-col justify-start mt-16 items-center text-3xl">
          {children}
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Layout
