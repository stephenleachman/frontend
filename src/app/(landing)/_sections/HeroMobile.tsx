'use client'
import Image from "next/image"
import HeroImageMobile from '@/../public/images/mobile_hero_image.png';
import Logo from '@/../public/images/mainMenuIcons/NavLogo.svg'
import { ButtonThemed } from "@/app/_global_components";
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link';
import { ThemeToggler } from "@/app/_global_components";

export default function HeroMobile() {
  return (
    <div className="min-h-screen tall:h-screen">
    <div className="flex justify-center h-2/5	 bg-custom-gray-1 dark:bg-custom-dark-2 w-full border-b-[3px] border-white dark:border-custom-dark-1">
      <div className=" container relative flex justify-center">
        <div className="self-end h-400px">
        <Image
            src={HeroImageMobile}
            alt="hero image of Stephen Leachman"
            height={400}
            width={400}
            priority
            className="object-cover w-[250px]"
          >
          </Image>
          </div>
          <div className="absolute top-0 left-0 sm:hidden">
            <Image
             src={Logo}
             alt="hero Logo"
             height={80}
             width={80}
             priority
            >
            </Image>
          </div>
          <div className="absolute top-4 right-5 sm:hidden">
            <ThemeToggler />
          </div>
      </div>
    </div>
     <div className="flex justify-center h-3/5 dark:bg-custom-dark-4 w-full border-b-[3px] border-white dark:border-custom-dark-1 relative pb-10">
     <div className="bg-gradient-to-r from-custom-Opacity-blue to-custom-Opacity-green absolute h-full w-full z-0 dark:hidden"></div>
        <div className="container px-4 md:px-10 z-10">
          <div className="flex items-center mt-10">
            <h2 className="text-custom-dark-2 dark:text-gray-50 text-3xl mb-8 tracking-wide font-semibold	">Hey, I’m</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center mb-8"></div>
          </div>
          <h1 className="text-custom-dark-2 dark:text-gray-50 text-5xl tracking-wide font-medium leading-snug">Stephen Leachman</h1>
          <h2 className="text-custom-dark-2 dark:text-gray-50 text-3xl	my-8 font-semibold tracking-wider"> A <span className="bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                'UI/UX Designer',
                1000, 
                'Web Developer',
                1000,
                'Freelancer',
                1000,
                'Business Owner',
                1000,
                'Trader',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </span></h2>
          <div>
            <ButtonThemed 
              color="gradiant" 
              size="lg"
              as={Link}
              radius="sm"
              href="/services"
              >
                My Services
            </ButtonThemed>
          </div>
        </div>
      </div>
    </div>
  )
}
