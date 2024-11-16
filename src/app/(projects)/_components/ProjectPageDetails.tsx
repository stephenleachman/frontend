

import Markdown from 'react-markdown'
import rehypePrism from 'rehype-prism-plus';
// import 'prismjs/themes/prism.css'; 
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default function ProjectPageDetails(project: any) {

 
  return (
    <div id="card" className="sm:rounded-xl max-w-full bg-background-card-2 sm:shadow sm:ring-1 ring-ring-color-1 p-5 pb-5 sm:py-5 overflow-hidden" >
      <h2 className="text-4xl font-medium mt-5 tracking-wider bg-gradient-to-r from-p-text to-hedding-text bg-clip-text text-transparent pb-1 mb-[-30px]">
        About This Project
      </h2>
      
      <Markdown 
        className="markdown"
        rehypePlugins={[rehypePrism]}
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
