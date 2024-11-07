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
    <div id="card" className="rounded-xl max-w-full overflow-hidden shadow ring-1 ring-ring-color-1 relative sm:h-[500px] grid ">
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
        <div className="bg-image-bg absolute h-full w-full opacity-[88%] select-none"></div>
        </div>
        <div className="sm:text-center z-10 p-5 relative">
            <h2 className="text-3xl sm:text-4xl tracking-wide pb-2 bg-gradient-to-b from-primary-1 to-primary-2 bg-clip-text text-transparent inline-block mb-2 sm:mb-5 font-semibold">{title}</h2>
            <p className="dark:text-p-text text-slate-300 leading-relaxed mb-8 ">
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
