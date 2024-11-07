'use client'
import { homePageSectionLinks } from '@/constants';
// import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function PageHeadNav() {

  const pathname = usePathname();

  return (
    <div className="hidden lg:block">
    <div className="flex justify-center px-4 md:px-10">
      <div className="container">
      <div className="backdrop-blur-lg bg-background-1/50 z-30 fixed top-0 flex pt-4 px-8 rounded-b-lg">
        <div className="flex gap-10">
        {homePageSectionLinks.map((item) => (
          <Link
            key={item.url}
            // href={item.url}      
            activeClass="border-b-3 border-primary-1 text-primary-1" 
            to={item.url}
            smooth={true}
            spy={true} 
            duration={0} 
            hashSpy={false}
            className="cursor-pointer text-link-text hover:text-primary-1 font-medium	relative pb-3" >
            {item.title}
            </Link>
        ))}
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}