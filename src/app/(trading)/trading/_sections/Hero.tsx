import { ThemeToggler } from '@/app/_global_components';
import Image from 'next/image';
import logo from '@/../public/images/mainMenuIcons/NavLogo.svg'
import Link from 'next/link'
import 'swiper/css/navigation';
import { FaChevronCircleDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-custom-Opacity-blue to-custom-Opacity-green absolute h-full w-full z-0 dark:hidden"></div>
      <div className="container relative">
        <div className="absolute top-3 w-full flex justify-between items-center">
          <Link
            href="/"
          >
          <Image
            src={logo}
            alt="Hero Logo"
            width={50}
            height={50}
            className="sm:hidden border-2 border-custom-dark-2 rounded-sm"
          >
          </Image>
          </Link>
          <ThemeToggler />
        </div>
        <div className="flex flex-row justify-between items-center pt-[100px] lg:max-w-[1000px] mx-auto">
          <div className="sm:text-center sm:justify-items-center">
            <h1 className="text-4xl md:text-7xl tracking-wide pb-2 text-custom-dark-1 dark:text-custom-gray-1">Welcome Traders</h1>
            <div className="w-[100px] h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded sm:justify-self-center my-5 md:my-8"></div>
            <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg mb-10 sm:mb-[100px]">
            Join me on my journey as an active trader. On this page, you'll find my market research, analysis, strategies, and much more. 
            I’m also excited to announce the future launch of a Trader’s University, designed for those eager to build a career in trading.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
