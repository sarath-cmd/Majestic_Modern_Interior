import Image from 'next/image';
import { images } from '../lib/gallerydata';

const Page = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} className='h-[50vh] w-[90vw] md:w-[40vw] xl:w-[25vw] rounded-xl m-5' />
        ))}
      </div>
      <h1 className='px-5 sm:flex justify-center my-5 text-xl xl:text-3xl font-bold'>For More Samples and Models Contact Us</h1>
    </div>
  );
}

export default Page;
