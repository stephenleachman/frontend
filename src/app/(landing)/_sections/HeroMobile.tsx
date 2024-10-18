'use client'
import Image from "next/image"
import HeroImageMobile from '@/../public/images/mobile_hero_image.png';
import HeroImageMobile2 from '@/../public/images/mobal-hero-image.png';
import Logo from '@/../public/images/mainMenuIcons/NavLogo.svg'
import { ButtonThemed } from "@/app/_global_components";
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link';
import { ThemeToggler } from "@/app/_global_components";
import { socialLinks } from "@/constants";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

export default function HeroMobile() {
  return (
    <div className="h-[91vh] flex flex-col" >
      <div className="flex justify-center 	 bg-custom-gray dark:bg-custom-dark-2 w-full border-b-[3px] border-white dark:border-custom-dark-1">
        <div className=" container relative flex justify-center">
          <div className="self-end h-400px">
          <Image
              src={HeroImageMobile2}
              alt="hero image of Stephen Leachman"
              height={400}
              width={400}
              priority
              className="object-cover w-[280px] mt-10 "
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
            <div className="absolute top-4 right-5 lg:hidden">
              <ThemeToggler />
            </div>
            <div className="flex flex-col justify-center sm:justify-end gap-8 absolute left-5 bottom-5 sm:hidden">
            {socialLinks.map((item) => (
              <Link 
                key={item.title}
                href={item.url}
                target="_blank"
              >
              <div className="py-2 text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition dark:hover:text-sky-500 ease delay-100 self-center"> 
                {item.icon === 'FaLinkedin' && <FaLinkedin className="text-2xl"/>}
                {item.icon === 'FaInstagram' && <FaInstagram className="text-2xl"/>}
                {item.icon === 'FaGithub' && <FaGithub className="text-2xl"/>}
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
     <div className="flex-grow dark:bg-custom-dark-4 w-full border-b-[3px] border-white dark:border-custom-dark-1 relative pb-10">
      <div className="bg-gradient-to-r from-custom-Opacity-blue to-custom-Opacity-green absolute h-full w-full z-0 dark:hidden"></div>
        <div className="container px-4 md:px-10 z-10 ">
          <div className="flex items-center mt-10">
            <h2 className="text-custom-dark-2 dark:text-custom-dark-text text-3xl mb-3 tracking-wide font-semibold	">👋 Hey, I’m</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center mb-3"></div>
          </div>
          <h1 className="text-custom-dark-2 dark:text-gray-50 text-5xl tracking-wide font-medium leading-snug">Stephen Leachman</h1>
          <div className="flex flex-row">
            <h2 className="text-custom-dark-2 dark:text-custom-dark-text text-3xl	my-5 font-semibold tracking-wider"> A </h2>
            <span className="bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent my-5 text-3xl font-semibold tracking-wider ml-3">
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
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </span>
          </div>
          <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg mb-10 hidden sm:block">
            Welcome to my portfolio website, and thanks for stopping by! Here, you can get to know me, explore some of my exciting projects, and possibly pick up a few new insights from my blog. Enjoy your visit!
          </p>

          {/* ------------------ Services Button ------------------ */}

          {/* <div className="mb-5">
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
      </div>
    </div>
  )
}
