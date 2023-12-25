import '../project/[slug]/markdown.css';
import Markdown from 'react-markdown'

export default function ProjectPageDetails(project: any) {
  return (
    <div id="card" className="sm:rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 py-16 sm:py-5" >
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
