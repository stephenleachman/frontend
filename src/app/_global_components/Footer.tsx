import Image from 'next/image';
import FooterLogo from '@/../public/images/footer_logo.svg'
import { FaRegUser,FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import Link from 'next/link';
import { socialLinks } from '@/constants';

function Footer() {
  return (
    <div className="px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4 border-t-[3px] border-white dark:border-custom-dark-1 flex justify-center absolute w-full bottom-0">
      <div className="container flex flex-col sm:flex-row sm:justify-between py-5 sm:py-4 gap-5 sm:gap-0">
        <Link 
          href={'/'}
          className="self-center"
          >
          <Image
            src={FooterLogo}
            alt="Footer Logo"
            height={30}
            width={40}
          >
          </Image>
        </Link>
        <span className="text-xs text-custom-dark-text self-center order-last sm:order-none">
          &copy; stephenleachman.com 
        </span>
        <div className="flex flex-row justify-center sm:justify-end gap-5">
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
  )
}

export default Footer
