'use client'

import { ButtonThemed } from "@/app/_global_components";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaFacebook, FaSquareWhatsapp, FaFacebookF } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


export default function ProjectPageShare(project: any) {

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate a network request or some async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };
  
  return (
    <div className="sm:rounded-xl max-w-full bg-background-card-2 overflow-hidden sm:shadow sm:ring-1 ring-ring-color-1 p-5 mb-16 sm:mb-0">
      <h2 className="text-xl font-medium leading-relaxed text-heading-text">Share This Project</h2>
      <ul className="flex flex-row lg:justify-between py-5 border-b border-ring-color-1">
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#0077b5] w-[40px] h-[40px] grid place-content-center rounded-md">
          <LinkedinShareButton 
          title={project.project.data.attributes.project_name}
          summary={project.project.data.attributes.overvierw}
          source="https://stephenleachman.com"
          url={`https://stephenleachman.com/project/${project.project.data.attributes.slug}`}
          className="w-[40px] h-[40px] grid place-content-center"  
          >
            <FaLinkedinIn />
          </LinkedinShareButton>
        </li>
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#1877F2] w-[40px] h-[40px] grid place-content-center rounded-md">
          <FacebookShareButton 
          url={`https://stephenleachman.com/project/${project.project.data.attributes.slug}`}     
          className="w-[40px] h-[40px] grid place-content-center" 
          >
           <FaFacebookF />
          </FacebookShareButton>
        </li>
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#000000] w-[40px] h-[40px] grid place-content-center rounded-md">
          <TwitterShareButton 
          title={project.project.data.attributes.project_name}
          url={`https://stephenleachman.com/project/${project.project.data.attributes.slug}`}  
          className="w-[40px] h-[40px] grid place-content-center" 
          >
            <FaXTwitter />
          </TwitterShareButton>
        </li>
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#25D366] w-[40px] h-[40px] grid place-content-center rounded-md">
          <WhatsappShareButton 
          url={`https://stephenleachman.com/project/${project.project.data.attributes.slug}`}  
          className="w-[40px] h-[40px] grid place-content-center" 
          >
            <FaWhatsapp />
          </WhatsappShareButton>
        </li>
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#b05df3] w-[40px] h-[40px] grid place-content-center rounded">
          <EmailShareButton 
          subject={project.project.data.attributes.project_name}
          body={project.project.data.attributes.overvierw}
          separator="  "
          url={`https://stephenleachman.com/project/${project.project.data.attributes.slug}`}  
          className="w-[40px] h-[40px] grid place-content-center" 
          >
            <IoIosMail />
          </EmailShareButton>
        </li>
      </ul>
        <ButtonThemed onClick={handleClick} disabled={isLoading}
            color="gray" 
            size="md"
            as={Link}
            radius="sm"
            href="/projects"
            className="w-full mt-4"
            isLoading={isLoading}
          >
          {isLoading ? (
              "Loading"
            ) : (
              <span className="text-lg">👉</span>
            )}
            Back To All Projects
        </ButtonThemed>
    </div>
  )
}
