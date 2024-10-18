'use client'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import { ThemeToggler } from '@/app/_global_components'
import { FaChevronCircleDown  } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeroImage from '@/../public/images/hero_image-1.png';
import { ButtonThemed } from '@/app/_global_components/ButtonThemed';

function Hero() {

  const pathname = usePathname();

  return (
    <div className="flex justify-center ">
      <div className="bg-gradient-to-r from-custom-Opacity-blue to-custom-Opacity-green absolute h-full w-full z-0 dark:hidden"></div>
      <div className="container z-10 relative">
        <div className="w-full flex justify-between absolute">
          <div className="py-7 left-0">
          </div>
          <ThemeToggler />
        </div>
        <div className="tall:h-screen grid grid-cols-2 gap-1 content-center">
          <div className="grid place-content-center py-10">
            <div className="flex items-center">
              <h2 className="text-custom-dark-2 md:dark:text-gray-50 text-4xl mb-10 tracking-wide">👋 Hey, I’m</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center mb-10"></div>
            </div>
            <h1 className="text-custom-dark-2 dark:text-gray-50 text-7xl tracking-wide">Stephen Leachman</h1>
            <div className="flex flex-row">
            <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl	my-10 font-semibold tracking-wider"> A </h2>
            <h2 className="bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent my-10 text-4xl font-semibold tracking-wider ml-3">
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
            <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg mb-10">
              Welcome to my portfolio website, and thanks for stopping by! Here, you can get to know me, explore some of my exciting projects, and possibly pick up a few new insights from my blog. Enjoy your visit!
            </p>

            {/* ------------------ Services Button ------------------ */}
            
            {/* <div>
              <ButtonThemed 
                color="gradiant" 
                size="lg"
                as={Link}
                radius="sm"
                href="/services"
                >
                  My Services
              </ButtonThemed>
            </div> */}

          </div>
          <div className="justify-self-end pl-10 self-center">
            <Image
              src={HeroImage}
              alt="hero image of Stephen Leachman"
              height={1000}
              width={1000}
              priority
              className="object-cover max-h-[800px] w-full mb-[100px]"
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
