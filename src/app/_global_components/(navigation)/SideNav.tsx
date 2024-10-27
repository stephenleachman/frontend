'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser,FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
import { IoIosImages } from "react-icons/io";
import { BsGraphUpArrow, BsTwitterX } from "react-icons/bs";
import { TiPen } from "react-icons/ti";
import MenuImage from '@/../public/images/mainMenuIcons/NavLogo.svg';
import { ScrollShadow } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { mainNavLinks, socialLinks } from '@/constants';
import { FaRegHandshake } from "react-icons/fa";
import { SideNavThemeToggler } from '@/app/_global_components';

function SideNav() {

  const pathname = usePathname();

  return (
    <header>
      <div className="h-screen bg-custom-gray dark:bg-custom-dark-2 sticky top-0 z-50" >
      <div className="h-full w-[4px] absolute bg-white dark:bg-custom-dark-1 right-0"></div>
        <ScrollShadow hideScrollBar>
          <div className="flex flex-col justify-between h-screen relative pr-[4px]">
            <div>
              <div className="mb-10">
                <Link href='/'>
                  <Image
                    src={MenuImage}
                    alt="Logo"
                    width={87}
                    height={78}
                    priority
                  >
                  </Image>
                </Link>
              </div>
              <nav>
              {mainNavLinks.map((item) => (
                <Link 
                  key={item.title}
                  href={item.url}
                  className={`${pathname === `${item.url}`|| pathname.includes(`${item.url2}`) ? ' dark:text-custom-blue text-sky-500 border-b-2	border-custom-blue' : ''}`}
                >
                  <div className={`text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-custom-blue dark:hover:text-custom-blue transition ease delay-100 relative
                    ${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? ' text-sky-400 hover:text-custom-blue dark:hover:text-custom-blue dark:text-sky-400' : ''}
                    `}>
                    <div className="py-4 grid justify-items-center font-medium	z-30">
                      {/* <FaRegUser className="text-2xl mb-2"/> {item.title} <react-icons icon={item.iconName} /> */}
                      {item.icon === 'FaRegUser' && <FaRegUser className="text-2xl mb-2"/>}
                      {item.icon === 'IoIosImages' && <IoIosImages className="text-2xl mb-2"/>}
                      {item.icon === 'FaRegHandshake' && <FaRegHandshake className="text-2xl mb-2"/>}
                      {item.icon === 'TiPen' && <TiPen className="text-2xl mb-2"/>}
                      {item.icon === 'BsGraphUpArrow' && <BsGraphUpArrow className="text-2xl mb-2"/>}
                      {item.title}
                    </div>
                    <div className={`${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? 'h-full w-[4px] bg-gradient-to-b from-custom-blue to-custom-green absolute right-0 mr-[-4px]' : ''}`}></div>
                    <div className={`${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? 'h-full w-full bg-gradient-to-br from-custom-blue/10 to-custom-green/10 absolute backdrop-blur-sm' : ''}`}></div>
                  </div>
                </Link>
              ))}
            </nav>
            </div>
            <div className="mb-12">
              <SideNavThemeToggler />
              <div className="grid justify-items-stretch">
                <div className="h-0.5 bg-custom-gray-link w-2/4 justify-self-center my-5"></div>
              </div>
              {socialLinks.map((item) => (
                <Link 
                  key={item.title}
                  href={item.url}
                  target="_blank"
                >
                  <div className="py-2 text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition dark:hover:text-sky-500 ease delay-100"> 
                    {item.icon === 'FaLinkedin' && <FaLinkedin className="text-2xl mb-2"/>}
                    {item.icon === 'BsTwitterX' && <BsTwitterX className="text-2xl mb-2"/>}
                    {item.icon === 'FaYoutube' && <FaYoutube className="text-2xl mb-2"/>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollShadow>
      </div>
    </header>
  )
}

export default SideNav
