"use client"

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
// import { ThemeToggler } from '@/components'
import { FaChevronCircleDown  } from "react-icons/fa";
import Link from 'next/link';
import { homePageSectionLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import HeroImage from '@/../public/images/mainMenuIcons/heroImage33.png';
// import LinkButton from '@/components/ui/LinkButton';
// import { motion } from "framer-motion"

function Hero() {

  const pathname = usePathname();

  return (
    <div className="flex justify-center ">
      <div className="bg-gradient-to-r from-custom-Opacity-blue to-custom-Opacity-green absolute h-full w-full z-0 dark:hidden"></div>
      <div className="container z-10 relative">
        <div className="w-full flex justify-between absolute">
          <div className="py-7 left-0">
            {homePageSectionLinks.map((item) => (
              <Link 
                key={item.title}
                href={item.url}
                className={`text-custom-dark-1 dark:text-custom-dark-text mr-8 hover:text-sky-500 hover:dark:text-sky-500 font-medium	relative ${pathname === `${item.url}` ? ' dark:text-sky-500 text-sky-500 border-b-2	border-custom-blue' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {/* <ThemeToggler /> */}
        </div>
        
        <div className="tall:h-screen grid grid-cols-2 gap-1 content-center">
          <div className="grid place-content-center">
            <div className="flex items-center">
              <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl mb-10 tracking-wide">Hey, I’m</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center mb-10"></div>
            </div>
            <h1 className="text-custom-dark-2 dark:text-gray-50 text-7xl tracking-wide">Stephen Leachman</h1>
            <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl	my-10 font-semibold tracking-wider"> A <span className="bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent">
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
            <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac enim mi pharetra amet.
            </p>
            {/* <div>
            <LinkButton
              path="/projects"
              title="My Services"
            />
            </div> */}
          </div>
          <div className="justify-self-end ">
            <Image
              src={HeroImage}
              alt="hero image of Stephen Leachman"
              height={800}
              width={800}
              priority
              className="object-cover h-[800px] w-full mb-[100px]"
            >
            </Image>
          </div>
        </div>
      </div>
      <Link href="#about" >
        <FaChevronCircleDown className="text-custom-gray-link dark:text-custom-dark-text text-4xl absolute bottom-10 left-[48.7%] right-[50%] z-10"/>
      </Link>  
    </div>
  )
}

export default Hero
