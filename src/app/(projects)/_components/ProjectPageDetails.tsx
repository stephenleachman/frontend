import Image from 'next/image';

export default function ProjectPageDetails(project: any) {
  return (
    <div id="card" className="rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 px-5 py-10" >
      <h1 className=" text-4xl	dark:text-gray-50 text-custom-dark-2 tracking-wide lg:text-center mb-8">
        {project.project.data.attributes.project_name}
      </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded my-8 lg:m-auto lg:mb-5"></div>
      <h2 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide mb-5">
        Overview
      </h2>
      <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed">
        {project.project.data.attributes.overvierw}
      </p>
      <h3 className="text-custom-dark-2 dark:text-gray-50 text-xl tracking-wide mb-5 mt-10">
        Tech Stack
      </h3>
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
