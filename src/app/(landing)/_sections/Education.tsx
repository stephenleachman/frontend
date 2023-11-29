import Image from 'next/image';
import SkilsImage from '@/../public/images/skils/skils-image.png';
import { FaExternalLinkAlt } from "react-icons/fa";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";

function Education() {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-custom-gray to-custom-gray-1 absolute h-full w-full dark:hidden z-0"></div>
      <div className="container grid z-10 py-24">
        <h2 className="text-center text-5xl	dark:text-gray-50 text-custom-dark-2 tracking-wide">My Education</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded justify-self-center my-8"></div>
        <p className="max-w-2xl	justify-self-center text-center leading-relaxed dark:text-custom-dark-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper 
          ac enim mi pharetra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae,
        </p>
        <div className="flex items-center mt-10 mb-5">
          <h3 className="text-custom-dark-2 dark:text-gray-50 text-4xl tracking-wide">My Skills</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center"></div>
        </div>
        <p className="leading-relaxed dark:text-custom-dark-text text-custom-dark-2 mb-3">
          Web Design & Development
        </p>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-10">

          <div className="rounded-md max-w-full bg-slate-500 overflow-hidden relative flex flex-row">
            <div className="object-cover">
              <Image 
                src={SkilsImage} 
                alt={'Branding'}
                width={96}
                height={95}
                className="object-cover"
                >
              </Image>
            </div>
            <div className="p-2 grid content-center">
              <h4 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide ml-3">Branding</h4>
              <div className="absa top-3 2 right-3 absolute">
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>

          
          <div className="rounded-md max-w-full bg-slate-500 overflow-hidden relative flex flex-row">
            <div className="object-cover">
              <Image 
                src={SkilsImage} 
                alt={'Branding'}
                width={96}
                height={95}
                className="object-cover"
                >
              </Image>
            </div>
            <div className="p-2 grid content-center">
              <h4 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide ml-3">UX/UI Design</h4>
              <div className="absa top-3 2 right-3 absolute">
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
          
          <div className="rounded-md max-w-full bg-slate-500 overflow-hidden relative flex flex-row">
            <div className="object-cover">
              <Image 
                src={SkilsImage} 
                alt={'Branding'}
                width={96}
                height={95}
                className="object-cover"
                >
              </Image>
            </div>
            <div className="p-2 grid content-center">
              <h4 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide ml-3">Web Development</h4>
              <div className="absa top-3 2 right-3 absolute">
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Education
