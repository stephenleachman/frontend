
import Markdown from 'react-markdown'

export default function ProjectPageDetails(project: any) {

  return (
    <div id="card" className="sm:rounded-xl max-w-full bg-background-card-2 overflow-hidden sm:shadow sm:ring-1 ring-ring-color-1 p-5 pb-5 sm:py-5" >
      <h2 className="text-4xl font-medium mt-5 tracking-wider bg-gradient-to-r from-p-text to-hedding-text bg-clip-text text-transparent pb-1 mb-[-30px]">
        About This Project
      </h2>
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
