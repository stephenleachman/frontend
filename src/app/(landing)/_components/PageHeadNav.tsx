'use client'
import { homePageSectionLinks } from '@/constants';
// import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function PageHeadNav() {

  const pathname = usePathname();

  return (
    <div className="flex justify-center px-4 md:px-10">
      <div className="container">
      <div className="backdrop-blur-sm  bg-custom-gray-1/80 dark:bg-custom-dark-2/80 text-custom-dark-text dark:text-custom-gray-link z-30 fixed top-0 flex pt-4 px-8 rounded-b-md">
        <div className="flex gap-10">
        {homePageSectionLinks.map((item) => (
          <Link
            key={item.url}
            // href={item.url}      
            activeClass="text-sky-500 border-b-3 border-custom-blue dark:text-sky-500" 
            to={item.url}
            smooth={true}
            spy={true} 
            duration={0} 
            hashSpy={false}
            className="cursor-pointer text-custom-dark-1 dark:text-custom-dark-text hover:text-sky-500 hover:dark:text-sky-500 font-medium	relative pb-3" >
            {item.title}
            </Link>
        ))}
        </div>
        </div>
      </div>
    </div>
  )
}