import Image from 'next/image';
import FooterLogo from '@/../public/images/footer-logo.svg'
import FooterLogoLight from '@/../public/images/footer-logo-light.svg'
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
import Link from 'next/link';
import { socialLinksFooter } from '@/constants';
import { BsTwitterX } from 'react-icons/bs';

function Footer() {
  return (
    <div className="px-4 md:px-10 bg-background-4 border-t-[3px] border-border flex justify-center absolute w-full bottom-0">
      <div className="container flex flex-col sm:flex-row sm:justify-between py-5 sm:py-4 gap-5 sm:gap-0 pb-[90px]">
        <Link 
          href={'/'}
          className="self-center"
          >
          <Image
            src={FooterLogo}
            alt="Footer Logo"
            height={30}
            width={40}
            className="dark:block hidden"
          >
          </Image>
          <Image
            src={FooterLogoLight}
            alt="Footer Logo"
            height={30}
            width={40}
            className="dark:hidden block"
          >
          </Image>
        </Link>
        <span className="text-xs text-link-text self-center order-last sm:order-none">
          &copy; 2024 stephenleachman.com 
        </span>
        <div className="flex flex-row justify-center sm:justify-end gap-7">
        {socialLinksFooter.map((item) => (
          <Link 
            key={item.title}
            href={item.url}
            target="_blank"
          >
            <div className="py-2 text-xs grid justify-items-center text-link-text hover:text-primary-1 transition ease delay-100 self-center"> 
              {item.icon === 'FaLinkedin' && <FaLinkedin className="text-xl"/>}
              {item.icon === 'FaYoutube' && <FaYoutube className="text-xl"/>}
              {item.icon === 'FaInstagram' && <FaInstagram className="text-xl"/>}
              {item.icon === 'BsTwitterX' && <BsTwitterX className="text-xl"/>}
              {item.icon === 'FaGithub' && <FaGithub className="text-xl"/>}
              
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
