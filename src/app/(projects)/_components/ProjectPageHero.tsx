'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import { Navigation, Pagination } from 'swiper/modules';

export default function ProjectPageHero(project: any) {
    // console.log(project.project)
  return (
    <div className="container rounded-xl drop-shadow  ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 xl:bg-slate-200 xl:dark:bg-custom-dark-4 mt-5 overflow-hidden">
      <Swiper
      pagination={{
        clickable: true,
      }}
      // spaceBetween={30}
      modules={[Pagination, Navigation]}
      navigation={true}
      className="w-full xl:h-[600px]"
      >
      <ul>
        {project.project.data.attributes.project_cover.data.map((projectImage: any) => (  
          <li key={projectImage.id} >
            <SwiperSlide className="" >
              <div className="grid place-items-center h-full w-full">
                <Image 
                  src={projectImage.attributes.url} 
                  alt={projectImage.attributes.alternativeText}     
                  height={486}
                  width={900}
                  className="object-cover cursor-grab select-none	"
                >
                </Image>
              </div>
            </SwiperSlide>
          </li>
        ))}
      </ul>
      </Swiper> 
    </div>
  )
}
