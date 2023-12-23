'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './swiper.css';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub, FaLongArrowAltLeft, FaLongArrowAltRight, FaRegCalendarAlt } from 'react-icons/fa';
import { ButtonThemed } from '@/app/_global_components';
import Link from 'next/link';

export default function ProjectPageHero(project: any) {

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };


  return (
    <div className="container rounded-xl shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 bg-white dark:bg-custom-dark-3 mt-5  flex flex-col-reverse xl:flex-row p-5  gap-10 xl:gap-16 overflow-hidden">
      <div className="xl:w-2/4 flex flex-col justify-between">
        <div>
          <h5 className="text-sm font-semibold uppercase text-yellow-600 bg-yellow-100 rounded-md inline-block py-1 px-3 mb-5">
            {project.project.data.attributes.project_type}  
          </h5>
          <h1 className=" text-5xl	bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent font-normal tracking-wider mb-8">
            {project.project.data.attributes.project_name}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green/1 rounded my-8 "></div>
          <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg	">
            {project.project.data.attributes.overvierw}
          </p>
          <div className="flex text-xs items-center font-normal text-custom-dark-2 dark:text-custom-dark-text mt-5">
            <FaRegCalendarAlt />
            <span className="text-sm ml-2 my-1">
              {new Date(project.project.data.attributes.project_data).toLocaleDateString('en-US', options)} 
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <ButtonThemed 
            color="gradiant" 
            size="lg"
            as={Link}
            radius="sm"
            href={project.project.data.attributes.project_live_url}
            target="_blank"
            >
              View Live Project
          </ButtonThemed>
          <Link className="flex mt-1 text-normal items-center font-semibold text-custom-gray-link dark:text-custom-dark-text dark:hover:text-custom-blue hover:text-custom-blue transition ease delay-100" 
          href={project.project.data.attributes.project_github_link}
          target="_blank"
          >  
          <FaGithub />
          <span className="ml-2">
            Projects Code
          </span>
          </Link>
        </div>
      </div>


      <div className="xl:w-2/4 mt-[-1.25rem]  mx-[-1.25rem] lg:mt-0  lg:mx-0"> 
      <Swiper
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      modules={[Pagination, Navigation]}
      navigation={true}
     
      className="md:rounded-lg dark:bg-custom-dark-3"
      >
      <ul className="rounded-lg overflow-hidden">
        {project.project.data.attributes.project_cover.data.map((projectImage: any) => (  
          <li key={projectImage.id} >
            <SwiperSlide className="" >
              <div className="">
                <Image 
                  src={projectImage.attributes.url} 
                  alt={projectImage.attributes.alternativeText}     
                  height={487}
                  width={1000}
                  className="object-cover select-none xl:h-[450px] rounded-lg"
                >
                </Image>
              </div>
            </SwiperSlide>
          </li>
        ))}
      </ul>
      </Swiper>
      </div>
    </div>
  )
}
