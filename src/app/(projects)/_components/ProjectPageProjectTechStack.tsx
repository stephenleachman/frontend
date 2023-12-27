import Link from "next/link";
import Image from 'next/image';
import {Tooltip} from "@nextui-org/react";

export default function ProjectPageProjectTechStack(fetchProjectTech: any) {

  return (
    <div className="sm:rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden sm:shadow sm:ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 sm:py-5">
      <h2 className="text-xl font-normal leading-relaxed text-custom-dark-2 dark:text-gray-50 mb-2">
        Tech Stack
      </h2>
      <ul className="flex flex-wrap flex-row gap-2">
        {fetchProjectTech.fetchProjectTech.data.attributes.technologies.data.map((technologies: any) => (
            <li key={technologies.id} className="shadow hover:shadow-lg transition-shadow cursor-pointer">
              <Tooltip radius="sm" showArrow={true} content={technologies.attributes.title}>
                <Image 
                  src={technologies.attributes.icon.data.attributes.url}    
                  alt={technologies.attributes.icon.data.attributes.alternativeText}                 
                  width={40}
                  height={40}
                  className="rounded-md shadow"
                >
                </Image>
              </Tooltip>
            </li>
          ))}
      </ul>
    </div>
  )
}
