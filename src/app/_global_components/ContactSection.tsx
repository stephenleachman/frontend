import Image from 'next/image';
import ContactImage from '@/../public/images/mobal-hero-image.png';
import { ContactForm } from '.';

export default function ContactSection() {

  return (
    <section id="contact" className="section px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-3 flex justify-center">
      <div className="container py-16 md:py-24">
        <div className="flex flex-row mb-8">
          <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl tracking-wide">Contact Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-flow-col gap-8 xl:gap-16">
          <div className="bg-custom-dark-1/30 dark:bg-custom-dark-4/50 rounded-lg  relative flex justify-center pt-5 ">
            <Image
              src={ContactImage}
              alt="Stephens Image"
              // width={500}
              // height={500}
              className="object-cover bottom-0"
            > 
            </Image>
          </div>
          <div className="">
            <h3 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide">Bringing Value!</h3>
            <p className="leading-relaxed text-custom-dark-1 dark:text-custom-dark-text font-normal	mt-5">
            - Looking for a custom website design built with the latest web technologies? Or does your business need help building a 
            strong online presence and assistance with marketing through Google and various social media channels? Let's work together to bring your vision to life.
            </p>
            <p className="leading-relaxed text-custom-dark-1 dark:text-custom-dark-text font-normal	mt-5">
            - If you're interested in collaborating on a specific project, I'm always looking to connect with like-minded individuals. Feel free to send me an email, 
            and I’ll get back to you as soon as possible.
            </p>
          </div>
          <div className="md:min-w-[370px] xl:min-w-[450px] md:col-span-2 justify-items-center">
            <div className="mt-2 w-full">
            <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
