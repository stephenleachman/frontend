'use client'

import { ButtonThemed } from "@/app/_global_components";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


export default function Share(post: any) {

  const slug = post.post.data.attributes.slug;
  const summery = post.post.data.attributes.summery;
  const title = post.post.data.attributes.title;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate a network request or some async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };
  
  return (
    <div className="rounded-xl max-w-full bg-custom-gray-1 dark:bg-custom-dark-4 overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 mb-16 sm:mb-0">
      <h2 className="text-xl ">Share This Articles</h2>
      <ul className="flex flex-row lg:justify-between py-5 border-b border-custom-dark-link dark:border-custom-dark-1">
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#0077b5] w-[40px] h-[40px] grid place-content-center rounded-md">
          <LinkedinShareButton 
          title={title}
          summary={summery}
          source="https://stephenleachman.com"
          url={`https://stephenleachman.com/blog/${slug}`}
          className="w-[40px] h-[40px] grid place-content-center"  
          >
            <FaLinkedinIn />
          </LinkedinShareButton>
        </li>
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#1877F2] w-[40px] h-[40px] grid place-content-center rounded-md">
          <FacebookShareButton 
          url={`https://stephenleachman.com/blog/${slug}`}     
          className="w-[40px] h-[40px] grid place-content-center" 
          >
           <FaFacebookF />
          </FacebookShareButton>
        </li>
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#000000] w-[40px] h-[40px] grid place-content-center rounded-md">
          <TwitterShareButton 
          title={summery}
          url={`https://stephenleachman.com/blog/${slug}`}  
          className="w-[40px] h-[40px] grid place-content-center" 
          >
            <FaXTwitter />
          </TwitterShareButton>
        </li>
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#25D366] w-[40px] h-[40px] grid place-content-center rounded-md">
          <WhatsappShareButton 
          url={`https://stephenleachman.com/blog/${slug}`}  
          className="w-[40px] h-[40px] grid place-content-center" 
          >
            <FaWhatsapp />
          </WhatsappShareButton>
        </li>
        <li className="text-2xl mr-3 hover:opacity-80 transition ease delay-100 text-white bg-[#b05df3] w-[40px] h-[40px] grid place-content-center rounded">
          <EmailShareButton 
          subject={title}
          body={summery}
          separator="  "
          url={`https://stephenleachman.com/blog/${slug}`}  
          className="w-[40px] h-[40px] grid place-content-center" 
          >
            <IoIosMail />
          </EmailShareButton>
        </li>
      </ul>
        <ButtonThemed onClick={handleClick} disabled={isLoading}
          color="gradiant" 
          size="md"
          as={Link}
          radius="sm"
          href="/blog"
          className="w-full mt-4"
          isLoading={isLoading}
          >
          {isLoading ? (
          "Loading"
          ) : (
            <span className="text-lg">👉</span>
          )}
          View All Articles
        </ButtonThemed>
    </div>
  )
}
