import Image from "next/image"
import { FaRegCalendarAlt } from "react-icons/fa"

export default function ProjectPageProjectType(project: any) {

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };

  return (
    <div className="sm:rounded-xl max-w-full bg-background-card-2 overflow-hidden sm:shadow sm:ring-1 ring-ring-color-1 p-5 pt-10 sm:py-5">
      <div className="flex flex-row">
        <Image 
          src={project.project.data.attributes.avatar.data.attributes.url} 
          alt={project.project.data.attributes.avatar}     
          height={100}
          width={100}
          className="object-cover rounded-lg ring-1 ring-ring-color-1"
        >
        </Image>
        <div className="ml-5">
          <h5 className="text-xs font-bold uppercase text-yellow-600 bg-yellow-100 rounded-md inline-block py-1 px-3">
            {project.project.data.attributes.project_type}  
          </h5>
          <h4 className="text-xl font-medium leading-relaxed text-heading-text my-2">
            {project.project.data.attributes.client_name}  
          </h4>
          <div className="flex mt-1 font-medium text-xs items-center text-p-text">
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
