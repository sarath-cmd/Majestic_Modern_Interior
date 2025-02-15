

const stat = () => {
  return (
    <>
      <section>
        <div className='sm:hidden mt-5'>
          <h1 className="text-3xl font-extrabold flex justify-center text-orange-700">500+</h1>
          <h2 className='text-lg font-medium flex justify-center'>Completed Projects</h2>
          <h1 className="text-3xl font-extrabold flex justify-center mt-7 text-orange-700">10+</h1>
          <h2 className='text-lg font-medium flex justify-center'>Years of Work</h2>
          <h1 className="text-3xl font-extrabold flex justify-center mt-7 text-orange-700">500+</h1>
          <h2 className='text-lg font-medium flex justify-center mb-5'>Satisfied Clients</h2>
        </div>
        <div className='hidden sm:flex mt-5 justify-evenly xl:mx-[20vw]'>
            <div className='inline-block'>
                <h1 className="text-3xl font-extrabold flex justify-center text-orange-700">500+</h1>
                <h2 className='text-lg font-medium flex justify-center'>Completed Projects</h2>
            </div>
            <div className='inline-block'>
                <h1 className="text-3xl font-extrabold flex justify-center text-orange-700">10+</h1>
                <h2 className='text-lg font-medium flex justify-center'>Years of Work</h2>
            </div>
            <div className='inline-block'>
                <h1 className="text-3xl font-extrabold flex justify-center text-orange-700">500+</h1>
                <h2 className='text-lg font-medium flex justify-center mb-5'>Satisfied Clients</h2>
            </div>
        </div>
      </section>

      <section>
        <div className='md:hidden'>
          <p className='p-5'>
            <b>Crafting Dream Homes with MAJESTIC MODERN INTERIOR</b> From initial concept to final touches, we ensure every detail is flawless. 
            Let us transform your house into a beautifully designed home that reflects your personality and lifestyle.
          </p>
        </div>
        <div className='hidden md:block md:h-[40vh]'>
          <p className='p-5 bg-orange-200 py-10 lg:px-10'>
            <b>Crafting Dream Homes with MAJESTIC MODERN INTERIOR</b> From initial concept to final touches, we ensure every detail is flawless. 
            Let us transform your house into a beautifully designed home that reflects your personality and lifestyle.
          </p>
          <div className='bg-category-image bg-fixed w-[100%] h-[100vh] bg-cover bg-center '></div>
        </div>
      </section>
    </>
  )
}

export default stat