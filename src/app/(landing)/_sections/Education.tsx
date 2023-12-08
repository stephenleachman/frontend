import Image from 'next/image';
import SkilsImage from '@/../public/images/skils/skils-image.png';
import { FaExternalLinkAlt } from "react-icons/fa";
import FetchSkills from '../_components/FetchSkills';
import FetchSoftwares from '../_components/FetchSoftwares';
import FetchTechnologies from '../_components/FetchTechnologies';

function Education() {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-custom-gray to-custom-gray-1 absolute h-full w-full dark:hidden z-0"></div>
      <div className="container grid z-10 py-24">
        <h2 className="text-center text-5xl	dark:text-gray-50 text-custom-dark-2 tracking-wide">My Education</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded justify-self-center my-8"></div>
        <p className="max-w-2xl	justify-self-center text-center leading-relaxed text-custom-dark-1 dark:text-custom-dark-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper 
          ac enim mi pharetra amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae,
        </p>
        <div className="flex items-center mt-10 mb-8">
          <h3 className="text-custom-dark-2 dark:text-gray-50 text-4xl tracking-wide">My Skills</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center"></div>
        </div>
        <FetchSkills/>
        <div className="flex items-center mt-20 mb-8">
          <h3 className="text-custom-dark-2 dark:text-gray-50 text-4xl tracking-wide">Software's</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center"></div>
        </div>
        <FetchSoftwares />
        <div className="flex items-center mt-20 mb-8">
          <h3 className="text-custom-dark-2 dark:text-gray-50 text-4xl tracking-wide">Technologies</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center"></div>
        </div>
        <FetchTechnologies />
      </div>
    </div>
  )
}

export default Education
