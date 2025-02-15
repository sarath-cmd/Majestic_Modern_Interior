"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('');
  const [md, setmd] = useState(false);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  function handlemd() {
    if(!md) setmd(true);
    if(md) setmd(false);
  }

  return (
    <section>
      <div className="md:flex px-7 py-5 hidden">
        <Link href="/" className="text-lg font-semibold font-mono p-2">MAJESTIC MODERN INTERIOR</Link>
        <nav className="flex ml-auto gap-5">
          <Link href="/" className={`p-2 font-bold ${activeTab === '/' ? 'text-orange-700' : ''}`}>Home</Link>
          <Link href="/about" className={`p-2 font-bold ${activeTab === '/about' ? 'text-orange-700' : ''}`}>About</Link>
          <Link href="/gallery" className={`p-2 font-bold ${activeTab === '/gallery' ? 'text-orange-700' : ''}`}>Gallery</Link>
          <Link href="/contact" className={`p-2 font-bold ${activeTab === '/contact' ? 'text-orange-700' : ''}`}>Contact Us</Link>
        </nav>
      </div>
      <div className='md:hidden'>
        <div className='flex justify-between'>
          <h1 className="font-bold font-mono pl-5 py-5">MAJESTIC INTERIOR</h1>
          <button className='pr-5' onClick={handlemd}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {md && 
          <div className='bg-orange-200'>
            <nav className='flex justify-evenly'>
              <Link href="/" className={`p-1 font-bold ${activeTab === '/' ? 'text-orange-700' : ''}`}>Home</Link>
              <Link href="/about" className={`p-1 font-bold ${activeTab === '/about' ? 'text-orange-700' : ''}`}>About</Link>
              <Link href="/gallery" className={`p-1 font-bold ${activeTab === '/gallery' ? 'text-orange-700' : ''}`}>Gallery</Link>
              <Link href="/contact" className={`p-1 font-bold ${activeTab === '/contact' ? 'text-orange-700' : ''}`}>Contact</Link>
            </nav>
          </div>
          }
      </div>
    </section>
  );
}

export default Navbar;
