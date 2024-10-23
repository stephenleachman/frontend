'use client'
import Link from 'next/link';
import Image from 'next/image';
import { ButtonThemed } from '@/app/_global_components';
import { FaRegCalendarAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './project_card_swiper.css';

import { Pagination } from 'swiper/modules';

export default function ProjectCard(props: any) {

  const truncateProjectDesc  = props.project.attributes.overvierw.length > 200 ? 
  props.project.attributes.overvierw.substring(0, 200) + "..." : props.project.attributes.overvierw;

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };

  return (
    <div key={props.project.id} id="card" className="rounded-xl max-w-full bg-white font-semibold dark:bg-custom-dark-3 overflow-hidden relative flex flex-col shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2">
      <div id="cardHeader" className="max-h-[300px] flex items-center relative overflow-hidden border-b border-gray-100 dark:border-custom-dark-2">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={30}
        className="w-full max-h-[300px]"
        >
        <ul>
        {props.project.attributes.project_cover.data.map((projectImage: any) => (  
          <li  key={props.project.id} >
            <SwiperSlide className="cursor-grab" >
              <Image 
                src={projectImage.attributes.url} 
                alt={projectImage.attributes.alternativeText}     
                height={270}
                width={500}
                className="object-cover w-full h-[300px]"
              >
              </Image>
            </SwiperSlide>
          </li>
        ))}
        </ul>
        </Swiper> 
      </div>
    <div id="cardBody" className="p-5">
      <h3 className="text-2xl dark:text-custom-gray-1 text-custom-dark-2 font-semibold dark:font-normal mb-5">
        {props.project.attributes.project_name}
      </h3>
      <p className="leading-relaxed text-custom-dark-1 dark:text-custom-dark-text font-normal	">
      {truncateProjectDesc}
      </p>
      <div className="mt-5">
        <ButtonThemed 
          color="gray" 
          size="lg"
          radius="sm"
          href={`/project/${props.project.attributes.slug}`}
          as={Link}
          className="font-medium dark:text-custom-gray-1 text-custom-dark-2"
          >
          Project Details
        </ButtonThemed>
      </div>
    </div>
    <div id="cardFooter" className="p-5 border-t border-gray-200 dark:border-custom-dark-2 flex items-center">
      <div>
        <Image 
          src={props.project.attributes.avatar.data.attributes.url} 
          alt={props.project.attributes.avatar.data.attributes.alternativeText}        
          height={50}
          width={50}    
          className="rounded-full"        
        >
        </Image>
      </div>
      <div className="ml-8 leading-relaxed dark:text-custom-dark-text text-custom-dark-2">
        <h5 className="text-lg font-normal leading-relaxed text-custom-dark-2 dark:text-custom-dark-text">{props.project.attributes.client_name}</h5>
        <div className="flex mt-1 text-xs items-center font-normal">
          <FaRegCalendarAlt />
          <p className="text-sm ml-2 mt-[2px]">{new Date(props.project.attributes.project_data).toLocaleDateString('en-US', options)}</p>
        </div>
        </div>
      </div>
    </div>
  )
}
