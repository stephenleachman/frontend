'use client'

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'

import { ThemeToggler } from '@/app/_global_components'
import { FaChevronCircleDown  } from "react-icons/fa";
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import HeroImage from '@/../public/images/mobal-hero-image.png';
import Christmass from '@/../public/images/ChristmasImg.png';
import { ButtonThemed } from '@/app/_global_components/ButtonThemed';

function Hero() {

  // const pathname = usePathname();

  return (
    <div className="flex justify-center">
      <div className="container z-10 relative">
        <div className="w-full flex justify-between absolute">
          <div className="py-7 left-0">
          </div>
          <ThemeToggler />
          
        </div>
        <div className="tall:h-screen grid grid-cols-2 gap-1 content-center">
          <div className="grid place-content-center py-10">
            <div className="flex items-center">
              <h2 className="heading-text text-4xl mb-10 font-medium tracking-wide">👋 Hey, I’m</h2>
              <div className="w-12 h-1 bg-gradient-to-b from-primary-1 to-primary-2 rounded ml-5 self-center mb-10"></div>
            </div>
            <h1 className="heading-text text-7xl font-medium tracking-wide">Stephen Leachman</h1>
            <div className="flex flex-row">
            <h2 className="heading-text text-4xl	my-10 font-semibold tracking-wider"> A </h2>
            <h2 className="bg-gradient-to-b from-primary-2 to-primary-1 bg-clip-text text-transparent my-10 text-4xl font-bold tracking-wider ml-3">
              <TypeAnimation
                preRenderFirstString={true}
                cursor={true}
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
                wrapper="p"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h2>
          </div>
            <p className="text-p-text leading-relaxed text-lg font-medium mb-10">
              Welcome to my portfolio website, and thanks for stopping by! Here, you can get to know me, explore some of my exciting projects, and possibly pick up a few new insights from my blog. Enjoy your visit!
            </p>

            {/* ------------------ Services Button ------------------ */}
            
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
          <div className="justify-self-center pl-10 self-center relative mb-10">
            <div className="hidden md:block h-[5px] w-[92%] bg-gradient-to-b from-primary-1 to-primary-2 rounded z-10 absolute bottom-0"></div>
            <div className="hidden md:block h-[3px] w-[10%] bg-gradient-to-b from-primary-1 to-primary-2 rounded z-10 absolute bottom-4 ml-5"></div>
            <div className="hidden md:block h-[4px] w-[20%] bg-gradient-to-b from-primary-1 to-primary-2 rounded z-10 absolute bottom-0 right-10 mb-[-16px] ml-5"></div>
            <Image
              src={HeroImage}
              alt="hero image of Stephen Leachman"
              height={1000}
              width={1000}
              priority
              className="object-cover h-[600px] w-full "
            >
            </Image>
          </div>
        </div>
      </div>
      <Link href="#about" >
        <FaChevronCircleDown className="text-link-text text-4xl absolute bottom-10 left-[48.7%] right-[50%] z-10"/>
      </Link>  
    </div>
  )
}

export default Hero
