
import Markdown from 'react-markdown'

export default function ProjectPageDetails(project: any) {

  return (
    <div id="card" className="sm:rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden sm:shadow sm:ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 pb-5 sm:py-5" >
      <Markdown className="markdown"
        components={{
          a: ({ node, href, ...props }) => {
            const isExternal = href && !href.includes('https://stephenleachman.com');
            return (
              <a
                {...props}
                href={href}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {props.children}
              </a>
            );
          },
        }}
      >
       {project.project.data.attributes.description }
      </Markdown>
   
    </div>
  )
}
