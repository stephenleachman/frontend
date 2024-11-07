'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import MenuImage from '@/../public/images/nav-logo.svg';
import { ScrollShadow } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { mainNavLinks, socialLinks } from '@/constants';
import ThemeToggler from '@/app/_global_components/SideNavThemeToggler';
import { FcBusinessman, FcTemplate, FcComboChart, FcEditImage, FcGallery} from "react-icons/fc";

function SideNav() {

  const pathname = usePathname();

  return (
    <header>
      <div className="h-screen bg-background-2 sticky top-0 z-50" >
      <div className="h-full w-[2px] absolute bg-border right-0"></div>
        <ScrollShadow hideScrollBar>
          <div className="flex flex-col justify-between h-screen relative pr-[2px]">
            <div>
              <div className="mb-5">
                <Link href='/'>
                  <Image
                    src={MenuImage}
                    alt="Logo"
                    width={87}
                    height={78}
                    priority
                    className="bg-image-bg"
                  >
                  </Image>
                </Link>
              </div>
              <nav>
              {mainNavLinks.map((item) => (
                <Link 
                  key={item.key}
                  href={item.url}
                  className={`${pathname === `${item.url}`|| pathname.includes(`${item.url2}`) ? ' text-primary-1 border-b-2	border-primary-1' : ''}`}
                >
                  <div className={`text-xs grid justify-items-center text-link-text hover:text-primary-1 transition ease delay-100 relative
                    ${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? ' text-primary-1 hover:text-primary-1' : ''}
                    `}>
                    <div className="py-4 grid justify-items-center font-medium z-30">
                      {/* <FaRegUser className="text-2xl mb-2"/> {item.title} <react-icons icon={item.iconName} /> */}
                      {item.icon === 'FcBusinessman' && <FcBusinessman className="text-2xl mb-2"/>}
                      {item.icon === 'FcTemplate' && <FcTemplate  className="text-2xl mb-2"/>}
                      {item.icon === 'FcComboChart' && <FcComboChart  className="text-2xl mb-2"/>}
                      {item.icon === 'FcGallery' && <FcGallery   className="text-2xl mb-2"/>}
                      {item.icon === 'FcEditImage' && <FcEditImage className="text-2xl mb-2"/>}
                      {item.title}
                    </div>
                    <div className={`${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? 'h-full w-[2px] bg-gradient-to-b from-primary-1 to-primary-2 absolute right-0 mr-[-2px]' : ''}`}></div>
                    <div className={`${pathname === `${item.url}` || pathname.includes(`${item.url2}`) ? 'h-full w-full bg-gradient-to-b from-primary-1/10 to-primary-2/10 absolute backdrop-blur-sm' : ''}`}></div>
                  </div>
                </Link>
              ))}
            </nav>
            </div>
            <div className="mb-2">
              <ThemeToggler />
              <div className="grid justify-items-stretch">
                <div className="h-0.5 bg-border w-2/4 justify-self-center my-5"></div>
              </div>
              {socialLinks.map((item) => (
                <Link 
                  key={item.key}
                  href={item.url}
                  target="_blank"
                >
                  <div className="py-2 text-xs grid justify-items-center text-link-text hover:text-primary-1 ease delay-100"> 
                    {item.icon === 'FaLinkedin' && <FaLinkedin className="text-xl mb-2"/>}
                    {item.icon === 'BsTwitterX' && <BsTwitterX className="text-xl mb-2"/>}
                    {item.icon === 'FaYoutube' && <FaYoutube className="text-xl mb-2"/>}
                    {/* {item.icon === 'FaInstagram' && <FaInstagram className="text-2xl mb-2"/>}
                    {item.icon === 'FaGithub' && <FaGithub className="text-2xl mb-2"/>} */}
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
