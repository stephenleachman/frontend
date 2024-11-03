import { ButtonThemed } from '@/app/_global_components/ButtonThemed'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface TridingLinkCardProps {
    title: string;
    summery: string;
    link: string;
    backgroundImage: string;
    imgAlt: string;
    isDisabled?: boolean;
    buttonText: string;
  }

function TridingLinkCard({ title, summery, backgroundImage, imgAlt, isDisabled = true, buttonText, }: TridingLinkCardProps ) {

  return (
    <div id="card" className="rounded-xl max-w-full overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2  relative sm:h-[500px] grid ">
        <div className="select-none">
        <Image 
            src={backgroundImage}
            alt={imgAlt}  
            height={500}
            width={500}
            style={{objectFit: "cover"}}
            className="absolute h-full w-full z-0 blur-[2px]"
            >
        </Image>
        <div className="bg-custom-gray dark:bg-custom-dark-3 absolute h-full w-full opacity-[85%] dark:opacity-[93%] select-none"></div>
        </div>
        <div className="sm:text-center z-10 p-5 relative">
            <h2 className="text-3xl sm:text-4xl tracking-wide pb-2 bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent inline-block mb-5 font-semibold">{title}</h2>
            <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed mb-8 font-medium">
             {summery}
            </p>
            <ButtonThemed 
                color="gradiant" 
                isDisabled={isDisabled} 
                size="lg"
                radius="sm"
                href="/"
                as={Link}
                className="font-semibold text-custom-gray-1">
                {buttonText}
            </ButtonThemed>
        </div>
  
    </div>
  )
}

export default TridingLinkCard
