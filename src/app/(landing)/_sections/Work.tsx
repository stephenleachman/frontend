import Image from 'next/image';
import JanitorsDirectLogo from '@/../public/images/JanitorsDirectLogo.svg';
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper 
              ac enim mi pharetra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, Mauris aliquet faucibus iaculis dui vitae ullamcorper 
              ac enim mi pharetra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae,
            </p>
            <Link
              href="https://janitorsdirect.com/"
              className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold	"
              target="_blank"
            >
              janitorsdirect.com
            </Link>
          </div>
          <div className="flex justify-center lg:basis-1/2 bg-custom-dark-2 dark:bg-gray-900  rounded-lg">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper 
              ac enim mi pharetra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, Mauris aliquet faucibus iaculis dui vitae ullamcorper 
              ac enim mi pharetra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae,
            </p>
            <Link
              href="/services"
              className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold	"
            >
              Learn More
            </Link>
          </div>
          <div className="flex justify-center lg:basis-1/2 bg-custom-dark-2 dark:bg-gray-900  rounded-lg">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper 
              ac enim mi pharetra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, Mauris aliquet faucibus iaculis dui vitae ullamcorper 
              ac enim mi pharetra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae,
            </p>
            <Link
              href="/trading"
              className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold	"
            >
              Learn More
            </Link>
          </div>
          <div className="flex justify-center lg:basis-1/2 bg-custom-dark-2 dark:bg-gray-900  rounded-lg">
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
      </div>
    </div>
  )
}

export default Work
