import Image from 'next/image';
import s from '@/public/s.png'

const services = () => {
  return (
    <section className='bg-white max-w-[100vw] overscroll-none overflow-hidden pb-5 pt-5'>
      <div className='block sm:hidden'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-2xl mb-3'>Our Services</h1>
        </div>
        <ul className='mx-auto px-3 my-auto font-medium'>
          <li className='font-semibold lg:mt-2'><span className='font-bold text-3xl mr-2'>&#8226;</span>Interior Detailing and Lighting Design</li>
          <li className='font-semibold lg:mt-2'><span className='font-bold text-3xl mr-2'>&#8226;</span>Budgeting</li>
          <li className='font-semibold lg:mt-2'><span className='font-bold text-3xl mr-2'>&#8226;</span>Exterior Finish Selections</li>
          <li className='font-semibold lg:mt-2'><span className='font-bold text-3xl mr-2'>&#8226;</span>Procurement of all Interior Selections</li>
          <li className='font-semibold lg:mt-2'><span className='font-bold text-3xl mr-2'>&#8226;</span>Project Coordination</li>
          <li className='font-semibold lg:mt-2'><span className='font-bold text-3xl mr-2'>&#8226;</span>Integration with Architect & Contractor</li>
          <li className='font-semibold lg:mt-2'><span className='font-bold text-3xl mr-2'>&#8226;</span>Color and Paint Selection</li>
          <li className='font-semibold lg:mt-2'><span className='font-bold text-3xl mr-2'>&#8226;</span>Wallpaper Installation</li>
        </ul>
      </div>

      <div className='sm:block hidden'>
        <div className='grid grid-flow-col grid-cols-2'>
          <Image src={s} alt="our services" className='w-full my-auto max-h-[50vh]' />
          <ul className='mx-auto pr-2 my-auto'>
            <li className='font-semibold lg:mt-2 2xl:text-2xl'><span className='font-bold text-2xl xl:text-3xl mr-2'>&#8226;</span>Interior Detailing and Lighting Design</li>
            <li className='font-semibold lg:mt-2 2xl:text-2xl'><span className='font-bold text-2xl xl:text-3xl mr-2'>&#8226;</span>Budgeting</li>
            <li className='font-semibold lg:mt-2 2xl:text-2xl'><span className='font-bold text-2xl xl:text-3xl mr-2'>&#8226;</span>Exterior Finish Selections</li>
            <li className='font-semibold lg:mt-2 2xl:text-2xl'><span className='font-bold text-2xl xl:text-3xl mr-2'>&#8226;</span>Procurement of all Interior Selections</li>
            <li className='font-semibold lg:mt-2 2xl:text-2xl'><span className='font-bold text-2xl xl:text-3xl mr-2'>&#8226;</span>Project Coordination & Integration with Architect & Contractor</li>
            <li className='font-semibold lg:mt-2 2xl:text-2xl'><span className='font-bold text-2xl xl:text-3xl mr-2'>&#8226;</span>Color and Paint Selection</li>
            <li className='font-semibold lg:mt-2 2xl:text-2xl'><span className='font-bold text-2xl xl:text-3xl mr-2'>&#8226;</span>Wallpaper Installation</li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default services;
