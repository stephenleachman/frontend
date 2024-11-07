'use client'
import { mainNavLinks } from '@/constants'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FcBusinessman, FcTemplate, FcComboChart, FcEditImage, FcGallery} from "react-icons/fc";

function BottomNav() {

  const pathname = usePathname();

  return (
    <div className="w-full bottom-0 bg-background-2 fixed z-50">
      <div className="w-full h-[2px] absolute bg-border top-0"></div>
      <nav className="grid grid-cols-5">
        {mainNavLinks.map((item) => (
          <Link 
            key={item.title}
            href={item.url}
            className={`${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? ' text-primary-1' : ''}`}
          >
            <div className={`text-xs flex flex-row justify-center text-link-text transition ease delay-100 relative
              ${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? 'text-primary-1' : ''}
              `}>
              <div className="py-4 grid font-medium justify-items-center z-30">
                {/* <FaRegUser className="text-2xl mb-2"/> {item.title} <react-icons icon={item.iconName} /> */}
                {item.icon === 'FcBusinessman' && <FcBusinessman className="text-2xl mb-2"/>}
                {item.icon === 'FcTemplate' && <FcTemplate className="text-2xl mb-2"/>}
                {item.icon === 'FcGallery' && <FcGallery className="text-2xl mb-2"/>}
                {item.icon === 'FcComboChart' && <FcComboChart className="text-2xl mb-2"/>}
                {item.icon === 'FcEditImage' && <FcEditImage className="text-2xl mb-2"/>}
                {item.title}
              </div>
              <div className={`${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? 'w-full h-[2px] bg-gradient-to-b from-primary-1 to-primary-2 absolute top-0 left-0 mr-[-4px] z-50' : ''}`}></div>
              <div className={`${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? 'h-full w-full bg-gradient-to-b from-primary-1/10 to-primary-2/10 absolute backdrop-blur-sm' : ''}`}></div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default BottomNav
