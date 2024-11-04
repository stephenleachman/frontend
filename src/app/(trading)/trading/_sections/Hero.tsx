import { ThemeToggler } from '@/app/_global_components';
import Image from 'next/image';
import logo from '@/../public/images/mainMenuIcons/NavLogo.svg'
import Link from 'next/link'
import 'swiper/css/navigation';
import TraderImage from '@/../public/images/traderImage.svg'

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
        <div className="flex flex-row justify-between items-center pb-16 pt-20 md:py-10">
          <div>
            <div className="items-center hidden sm:flex">
              <h2 className="text-custom-dark-2 dark:text-custom-dark-text text-3xl mb-5 md:mb-10 tracking-wide">Stephen Leachman</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-green-500 rounded ml-5 self-center mb-5 md:mb-10"></div>
            </div>
            <h1 className="text-5xl md:text-7xl tracking-wide bg-gradient-to-r from-custom-blue to-green-500 bg-clip-text text-transparent pb-2 inline-block">Trading</h1>
            <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg mt-5 md:mt-10 lg:pr-10 lg:max-w-[700px]">
            💪 Welcome Traders! Join me on my journey as an active trader. Here, you'll find my market research, analysis, strategies, and so much more. 
            </p>
          </div>
          <div className="justify-self-center ml-5 hidden lg:block min-h-[320px] content-center">
            <div className="flex justify-center bg-custom-dark-4 dark:bg-gray-900 rounded-lg">
              <Image 
                src={TraderImage} 
                alt="Day Trading Image"
                className="p-4"
                height={200}
                width={500}
              >
              </Image>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row justify-between items-center pt-[100px] lg:max-w-[1000px] mx-auto">
          <div className="sm:text-center sm:justify-items-center">
            <h1 className="text-4xl md:text-7xl tracking-wide pb-2 text-custom-dark-1 dark:text-custom-gray-1">Welcome Traders</h1>
            <div className="w-[100px] h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded sm:justify-self-center my-5 md:my-8"></div>
            <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg mb-10 sm:mb-[100px]">
            Join me on my journey as an active trader. Here, you'll find my market research, analysis, strategies, and much more. 
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
