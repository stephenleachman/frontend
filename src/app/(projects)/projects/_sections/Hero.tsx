import { ThemeToggler } from '@/app/_global_components';
import Image from 'next/image';
// import HeroImage from '@/../public/images/hero_image-1.png';
import logo from '@/../public/images/nav-logo.svg'
import Link from 'next/link';
import 'swiper/css/navigation';

export default function Hero() {
  return (
    <div className="flex justify-center md:min-h-[450px]">
      <div className="container relative content-center">
        <div className="absolute top-3 w-full flex justify-between items-center">
          <Link
            href="/"
          >
          <Image
            src={logo}
            alt="Hero Logo"
            width={50}
            height={50}
            className="sm:hidden ring-1 ring-ring-color-1 rounded-sm bg-image-bg"
          >
          </Image>
          </Link>
          <ThemeToggler />
        </div>
        <div className="flex flex-row justify-between items-center pb-16 pt-20 md:py-10">
          <div>
            <div className="items-center hidden sm:flex">
              <h2 className="text-p-text text-3xl mb-5 md:mb-10 tracking-wide">Stephen Leachman</h2>
              <div className="w-12 h-1 bg-gradient-to-b from-primary-1 to-primary-2 rounded ml-5 self-center mb-5 md:mb-10"></div>
            </div>
            <h1 className="text-5xl md:text-7xl tracking-wide font-medium bg-gradient-to-b from-primary-1 to-primary-2 bg-clip-text text-transparent pb-2 inline-block">My Projects</h1>
            <p className="text-p-text leading-relaxed text-lg mt-5 md:mt-10 lg:pr-10 lg:max-w-[700px]">
              Welcome to my portfolio of exciting projects! As you explore, you'll find detailed information about each project and have the opportunity to view them live.
            </p>
          </div>
          <div className="justify-self-center	lg:mr-20 hidden lg:block">
            {/* <Image
              src={HeroImage}
              alt="hero image of Stephen Leachman"
              height={250}
              width={250}
              priority
              className="object-cover"
            >
            </Image> */}
          </div>
        </div>
      </div>
    </div>
  )
}
