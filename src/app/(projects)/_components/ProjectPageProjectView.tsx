import { ButtonThemed } from '@/app/_global_components'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'

export default function ProjectPageProjectView(project: any) {
  return (
    <div className="rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 flex flex-row justify-between">
      <Link className="flex mt-1 text-normal items-center font-semibold text-custom-gray-link dark:text-custom-dark-text dark:hover:text-custom-blue hover:text-custom-blue transition ease delay-100" 
        href={project.project.data.attributes.project_github_link}
        target="_blank"
        >  
        <FaGithub />
        <span className="ml-2">
          Projects Code
        </span>
      </Link>
      <ButtonThemed 
        color="gradiant" 
        size="md"
        as={Link}
        radius="sm"
        href={project.project.data.attributes.project_live_url}
        target="_blank"
        >
          View Live Project
      </ButtonThemed>
    </div>
  )
}
