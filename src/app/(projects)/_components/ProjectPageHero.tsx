'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa';
import { ButtonThemed } from '@/app/_global_components';
import Link from 'next/link';

export default function ProjectPageHero(project: any) {

  return (
    <div className="container sm:rounded-xl sm:shadow sm:ring-1 ring-ring-color-1 bg-background-card-2 sm:mt-5  flex flex-col-reverse xl:flex-row p-5  gap-7 md:gap-10 xl:gap-16 overflow-hidden pb-10 sm:pb-5 xl:min-h-[460px]">
      <div className="xl:w-2/4 flex flex-col justify-between ">
        <div>
          <h5 className="text-sm font-semibold uppercase text-yellow-600 bg-yellow-100 rounded-md inline-block py-1 px-3 mb-5">
            {project.project.data.attributes.project_type}  
          </h5>
          <h1 className=" text-5xl font-medium bg-gradient-to-b from-primary-1 to-primary-2 bg-clip-text text-transparent text-heading-text tracking-wider mb-8">
            {project.project.data.attributes.project_name}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-b from-primary-1 to-primary-2 rounded my-8 "></div>
          <p className="text-p-text font-medium leading-7 tracking-wider">
            {project.project.data.attributes.overvierw}
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row mt-10">
          <div >
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
          </div>
          <div className="sm:self-center my-2 sm:my-0">
            <Link className="inline-flex mt-1 text-normal items-center font-semibold text-link-text hover:text-primary-1 transition ease delay-100 sm:ml-5 md:ml-10 mb-5 sm:mb-0 " 
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
      </div>

      <div className="xl:w-2/4 mt-[-1.25rem]  mx-[-1.25rem] lg:mt-0 lg:mx-0 place-content-center "> 
      <Swiper
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      modules={[Pagination, Navigation]}
      navigation={true}
      className="md:rounded-lg dark:bg-background-3"
      >
      <ul className="rounded-lg overflow-hidden">
        {project.project.data.attributes.project_cover.data.map((projectImage: any) => (  
          <li key={projectImage.id} >
            <SwiperSlide className="" >
                <Image 
                  src={projectImage.attributes.url} 
                  alt={projectImage.attributes.alternativeText}     
                  height={420}
                  width={1000}
                  // style={{objectFit: "cover"}}
                  className="object-cover select-none xl:max-h-[450px] sm:rounded-lg"
                >
                </Image>
            </SwiperSlide>
          </li>
        ))}
      </ul>
      </Swiper>
      </div>
    </div>
  )
}
