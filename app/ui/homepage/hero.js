import Link from "next/link"

const hero = () => {
  return (
    <main className="overflow-hidden overscroll-none">
        <div className="w-[100vw] h-[92vh] bg-cover bg-center md:hidden block" id="mhero">
          <div className="w-[100vw] h-[92vh] bg-gradient-to-t bg-black bg-opacity-50">
            <h1 className="font-bold text-lg text-white pt-[60vh] flex justify-center">Transforming Dreams into Reality.</h1>
            <Link href='/contact' className='flex justify-center mt-1'>
              <button className='px-5 py-2 rounded-full bg-orange-700 font-bold mt-2'>
                Book for a FREE Consulting
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[100vw] h-[92vh] bg-hero-image bg-cover bg-center hidden md:block">
          <h1 className="font-bold text-3xl text-white pt-[60vh] flex justify-center">Transforming Dream Homes into Reality.</h1>
          <Link href='/contact' className='flex justify-center mt-2'>
            <button className='px-5 py-2 rounded-full bg-orange-700 font-bold mt-2 text-2xl'>
              Book for a FREE Consulting
            </button>
          </Link>
        </div>
      </main>
  )
}

export default hero