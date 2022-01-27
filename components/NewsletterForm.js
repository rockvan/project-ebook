const Newsletter = () => {
  return (
    <>
      <form className="flex flex-col items-center justify-center box">
        <p className="text-white">Sign up for our newsletter</p>
        <div className="space-x-3">
          <input className="my-2 text-black" type="email" placeholder="Email" />
          <button className=" btn button-primary" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </>
  )
}

export default Newsletter
