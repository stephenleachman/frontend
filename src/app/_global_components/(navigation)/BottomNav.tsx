'use client'
import { mainNavLinks } from '@/constants'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoIosImages } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { TiPen } from "react-icons/ti";
import { FaRegHandshake, FaRegUser } from "react-icons/fa";

function BottomNav() {

  const pathname = usePathname();

  return (
    <div className="w-full bottom-0 bg-custom-gray dark:bg-custom-dark-2 fixed z-50">
      <div className="w-full h-[4px] absolute bg-white dark:bg-custom-dark-1 top-0"></div>
      <nav className="grid grid-cols-5">
        {mainNavLinks.map((item) => (
          <Link 
            key={item.title}
            href={item.url}
            className={`${pathname === `${item.url}` ? ' dark:text-custom-blue text-sky-500' : ''}`}
          >
            <div className={`text-xs flex flex-row justify-center text-custom-gray-link dark:text-custom-dark-text transition ease delay-100 relative
              ${pathname === `${item.url}` ? 'text-sky-400 dark:text-sky-400' : ''}
              `}>
              <div className="py-4 grid font-medium justify-items-center z-30">
                {/* <FaRegUser className="text-2xl mb-2"/> {item.title} <react-icons icon={item.iconName} /> */}
                {item.icon === 'FaRegUser' && <FaRegUser className="text-2xl mb-2"/>}
                {item.icon === 'IoIosImages' && <IoIosImages className="text-2xl mb-2"/>}
                {item.icon === 'FaRegHandshake' && <FaRegHandshake className="text-2xl mb-2"/>}
                {item.icon === 'TiPen' && <TiPen className="text-2xl mb-2"/>}
                {item.icon === 'BsGraphUpArrow' && <BsGraphUpArrow className="text-2xl mb-2"/>}
                {item.title}
              </div>
              <div className={`${pathname === `${item.url}` ? 'w-full h-[4px] bg-gradient-to-r from-custom-blue to-custom-green absolute top-0 left-0 mr-[-4px] z-50' : ''}`}></div>
              <div className={`${pathname === `${item.url}` ? 'h-full w-full bg-gradient-to-br from-custom-blue/10 to-custom-green/10 absolute backdrop-blur-sm' : ''}`}></div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default BottomNav
