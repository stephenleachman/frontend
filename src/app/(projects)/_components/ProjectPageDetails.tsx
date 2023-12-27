import '../project/[slug]/markdown.css';
import Markdown from 'react-markdown'
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { ButtonThemed } from '@/app/_global_components';
import { ProjectPageProjectType } from '.';

export default function ProjectPageDetails(project: any) {

  return (
    <div id="card" className="sm:rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden sm:shadow sm:ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 pt-10 pb-5 sm:py-5" >
       <Markdown className="markdown">
       {project.project.data.attributes.description }
      </Markdown>
      <ul>
        {project.project.data.attributes.technologies.data.map((teckStack: any) => (  
          <li key={teckStack.id} >
            <div className="grid h-full w-full">
              {teckStack.attributes.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
