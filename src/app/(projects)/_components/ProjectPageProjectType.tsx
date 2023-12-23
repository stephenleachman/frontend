import Image from "next/image"
import { FaRegCalendarAlt } from "react-icons/fa"

export default function ProjectPageProjectType(project: any) {

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };

  return (
    <div className="rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 sticky top-0">
      <div className="flex flex-row">
        <Image 
          src={project.project.data.attributes.avatar.data.attributes.formats.small.url} 
          alt={project.project.data.attributes.avatar}     
          height={100}
          width={100}
          className="object-cover rounded-lg"
        >
        </Image>
        <div className="ml-5">
          <h5 className="text-xs font-semibold uppercase text-emerald-600 bg-emerald-100 rounded-md inline-block py-1 px-3">
            {project.project.data.attributes.project_type}  
          </h5>
          <h4 className="text-xl font-normal leading-relaxed text-custom-dark-2 dark:text-gray-50 my-2">
            {project.project.data.attributes.client_name}  
          </h4>
          <div className="flex mt-1 text-xs items-center font-normal text-custom-dark-2 dark:text-custom-dark-text">
             <FaRegCalendarAlt />
            <span className="text-sm ml-2 my-1">
              {new Date(project.project.data.attributes.project_data).toLocaleDateString('en-US', options)} 
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
