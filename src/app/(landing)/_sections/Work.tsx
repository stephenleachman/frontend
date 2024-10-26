import Image from 'next/image';
import JanitorsDirectLogo from '@/../public/images/JanitorsDirectLogo.svg';
import FreelancerImage from '@/../public/images/freelancerImage.svg'
import TraderImage from '@/../public/images/traderImage.svg'
import Link from 'next/link';

function Work() {
  return (
    <div className="flex justify-center">
        <div className="bg-gradient-to-t  from-custom-dark-2 via-custom-dark-3 to-custom-dark-4 absolute h-full w-full dark:block hidden z-0"></div>
      <div className="container grid z-10 py-16 md:py-24">
        <h2 className="text-center text-5xl	dark:text-gray-50 text-custom-dark-2 tracking-wide">What I Do</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded justify-self-center my-8"></div>

        {/* Janitors Direct */}
        <div className="flex lg:flex-row gap-10 lg:gap-20 mt-5 lg:mt-10 flex-col-reverse">
          <div className="basis-1/2">
            <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl tracking-wide">
              Business Owner
            </h2>
            <h3 className="py-1 px-3 bg-gradient-to-r from-custom-blue to-custom-green rounded  text-white font-medium inline-block my-5">
              B2B Services
            </h3>
            <p className="leading-relaxed text-custom-dark-1 dark:text-custom-dark-text mb-5">
            I own and operate Janitors Direct, a janitorial company my wife and I started at the end of 2022. Since then, we have grown, serving clients across 
            various industries. Our core service is recurring maintenance cleaning, focused on maintaining the appearance and sanitation of our client's facilities. 
            In addition to that, we offer deep cleaning and electrostatic disinfecting services.
            </p>
            <Link
              href="https://janitorsdirect.com/"
              className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold	"
              target="_blank"
            >
              👉 janitorsdirect.com
            </Link>
          </div>
          <div className="flex justify-center lg:basis-1/2 bg-custom-dark-3 dark:bg-gray-900  rounded-lg">
            <Image 
              src={JanitorsDirectLogo} 
              alt="Janitors Direct LLC. Logo"
              className="p-4"
              height={200}
              width={500}
            >
            </Image>
          </div>
        </div>
        
        {/* Freelancing */}
        <div className="flex lg:flex-row gap-10 lg:gap-20 mt-14 lg:mt-32 flex-col-reverse">
          <div className="basis-1/2 lg:order-last">
            <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl tracking-wide">
              Freelancer
            </h2>
            <h3 className="py-1 px-3 bg-gradient-to-r from-custom-blue to-custom-green rounded text-white font-medium inline-block my-5">
              Web Designer & Developer
            </h3>
            <p className="leading-relaxed text-custom-dark-1 dark:text-custom-dark-text mb-5">
            My agency closed at the beginning of 2020, but when time allows, I still enjoy freelancing. My work primarily focuses on designing custom websites and web applications, 
            then developing them using technologies like Next.js, Tailwind CSS, and MongoDB. I also help businesses with social media marketing and account management. 
            I love assisting clients in solving problems and healping with growing their businesses.
            </p>
            <Link
              href="/services"
              className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold	"
            >
              👉 Learn More
            </Link>
          </div>
          <div className="flex justify-center lg:basis-1/2 bg-custom-dark-3 dark:bg-gray-900  rounded-lg">
            <Image 
              src={FreelancerImage} 
              alt="Janitors Direct LLC. Logo"
              className="p-4"
              height={200}
              width={500}
            >
            </Image>
          </div>
        </div>

        {/* Trading */}
        <div className="flex lg:flex-row gap-10 lg:gap-20 mt-14 lg:mt-32 flex-col-reverse">
          <div className="basis-1/2">
            <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl tracking-wide">
              Trader
            </h2>
            <h3 className="py-1 px-3 bg-gradient-to-r from-custom-blue to-custom-green rounded text-white font-medium inline-block my-5">
              Stocks & Options
            </h3>
            <p className="leading-relaxed text-custom-dark-1 dark:text-custom-dark-text mb-5">
            My true passion lies in the financial markets, specifically short-term equities trading. Trading is by far one of the most challenging endeavors anyone can pursue. 
            To succeed as a trader, you have to love it. A Harvard MBA is nothing. What truly matters is skill, the ability to make split-second decisions, and strong self-awareness. 
            You admit when you're wrong and move on quickly. Trading is like a sport, and your competition consists of billion-dollar funds and advanced algorithms. You either perform or lose money. What not to love.
            </p>
            <Link
              href="/trading"
              className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold	"
            >
              👉 Learn More
            </Link>
          </div>
          <div className="flex justify-center lg:basis-1/2 bg-custom-dark-3 dark:bg-gray-900  rounded-lg">
            <Image 
              src={TraderImage} 
              alt="Janitors Direct LLC. Logo"
              className="p-4"
              height={200}
              width={500}
            >
            </Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
