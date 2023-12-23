import Image from 'next/image';

export default function ProjectPageDetails(project: any) {
  return (
    <div id="card" className="rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 px-5 py-10" >

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
