const Newsletter = () => {
  return (
    <>
      <form className="grid py-1 place-content-center">
        <p className="py-1 font-bold text-white uppercase justify-self-center">
          Sign up for our newsletter
        </p>
        <div className="grid gap-2 md:grid-cols-2">
          <input
            className="px-3 text-black rounded-lg"
            type="email"
            placeholder="Email"
          />
          <button className=" btn button-primary" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </>
  )
}

export default Newsletter
