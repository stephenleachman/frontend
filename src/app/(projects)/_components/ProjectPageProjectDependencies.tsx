import { ButtonThemed } from "@/app/_global_components";
import Link from "next/link";
import { CgNpm } from "react-icons/cg";

export default function ProjectPageProjectDependencies(project: any) {
  // console.log(project.project.data.attributes.npm_dependencies.data.map)
  return (
    <div className="sm:rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden sm:shadow sm:ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 sm:py-5">
      <h2 className="text-xl font-normal leading-relaxed text-custom-dark-2 dark:text-gray-50 mb-2">
        Dependencies
      </h2>
      <ul className="flex flex-wrap flex-row gap-1">
        {project.project.data.attributes.npm_dependencies.data.map((npm_dependencies: any) => (
            <li key={npm_dependencies.id} className="">
              <ButtonThemed
               color="gray" 
               size="sm"
               as={Link}
               radius="sm"
               href={npm_dependencies.attributes.URL}
               className="w-full"
               target="_blank"
               >
              <CgNpm />{npm_dependencies.attributes.name}              
              </ButtonThemed>
            </li>
        ))}
      </ul>
    </div>
  )
}
