import Image from 'next/image';
import SkilsImage from '@/../public/images/skils/skils-image.png';
import { FaExternalLinkAlt } from "react-icons/fa";
import FetchSkills from '../_components/FetchSkills';
import FetchSoftwares from '../_components/FetchSoftwares';
import FetchTechnologies from '../_components/FetchTechnologies';

function Education() {
  return (
    <div className="flex justify-center">
      {/* <div className="bg-gradient-to-b from-custom-gray to-custom-gray-1 absolute h-full w-full dark:hidden z-0"></div> */}
      <div className="container grid z-10 py-16 md:py-24">
        <h2 className="text-center text-5xl	text-heading-text font-medium tracking-wide">My <span className="bg-gradient-to-b from-primary-2 to-primary-1 bg-clip-text text-transparent">Education</span></h2>
        <span className="text-center text-p-text font-medium leading-relaxed text-lg mt-5">Outlining My Education, Skills and Experience</span>
        <div className="h-1 w-20 bg-gradient-to-b from-primary-1 to-primary-2 rounded justify-self-center my-8"></div>
        <p className="max-w-2xl	justify-self-center text-center leading-relaxed text-p-text">
        Being self-taught with no formal education, I’ve gained my knowledge through hard work, dedication, and perseverance. I’ve made extensive use of 
        skill-sharing platforms and free online resources. Most importantly, I’ve applied what I’ve learned in my own ventures, gaining valuable hands-on experience along the way.
        </p>
        <div className="flex items-center mt-10 mb-8">
          <h3 className="text-headind-text text-4xl tracking-wide">My Skills</h3>
          <div className="w-12 h-1 bg-gradient-to-b from-primary-1 to-primary-2 rounded ml-5 self-center"></div>
        </div>
        <FetchSkills/>
        <div className="flex items-center mt-20 mb-8">
          <h3 className="text-text-headind-text  text-4xl tracking-wide">Software's</h3>
          <div className="w-12 h-1 bg-gradient-to-b from-primary-1 to-primary-2 rounded ml-5 self-center"></div>
        </div>
        <FetchSoftwares />
        <div className="flex items-center mt-20 mb-8">
          <h3 className="text-text-headind-text text-4xl tracking-wide">Technologies</h3>
          <div className="w-12 h-1 bg-gradient-to-b from-primary-1 to-primary-2 rounded ml-5 self-center"></div>
        </div>
        <FetchTechnologies />
      </div>
    </div>
  )
}

export default Education
