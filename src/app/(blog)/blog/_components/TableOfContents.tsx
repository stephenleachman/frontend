'use client'

import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import rehypeSlug from 'rehype-slug';
import { Link as ScrollLink } from 'react-scroll';

interface Heading {
    id: string;
    text: string;
    level: number;
  }
  
  interface TableOfContentsProps {
    content: string;
  }
  
  const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);
  
    useEffect(() => {
      const extractedHeadings: Heading[] = [];
  
      // A function to extract headings without rendering the entire markdown
      const extractHeadings = (markdown: string) => {
        const lines = markdown.split('\n');
  
        lines.forEach(line => {
          const h2Match = line.match(/^## (.+)/); // Matches h2
        //   const h3Match = line.match(/^### (.+)/); // Matches h3
  
          if (h2Match) {
            const text = h2Match[1];
            const id = text.toLowerCase().replace(/\s+/g, '');
            extractedHeadings.push({ id, text, level: 2 });
        //   } else if (h3Match) {
        //     const text = h3Match[1];
        //     const id = text.toLowerCase().replace(/\s+/g, '');
        //     extractedHeadings.push({ id, text, level: 3 });
          }
        });
  
        setHeadings(extractedHeadings);
      };

  
      extractHeadings(content);
    }, [content]);
  
    return (
      <div className="rounded-xl max-w-full bg-custom-gray-1 dark:bg-custom-dark-4 overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5 sm:py-5 mt-5">
        <nav>
          <h2 className=" text-xl mb-5">📖 Table of Contents</h2>
        
          <ul  role="list" className="marker:text-custom-blue list-disc pl-5 ">
            {/* {headings.map((heading) => (
              <li className="pb-2" 
                key={heading.id} 
                style={{ marginLeft: heading.level === 3 ? '1em' : '0' }}
                >
                <a className="text-custom-gray-link dark:text-custom-gray-1 hover:text-custom-blue dark:hover:text-custom-blue transition ease-in-out " 
                    href={`#${heading.id}`}>{heading.text}
                </a>
              </li>
            ))} */}
            {headings.map((heading) => {
              return (
                <li className="pb-2"
                  key={heading.id}
                  style={{ marginLeft: heading.level === 3 ? '1em' : '0' }}
                  >
                  <ScrollLink
                    to={heading.id}
                    spy={true}
                    smooth={true}
                    duration={0}
                    hashSpy={false}
                    className="cursor-pointer text-custom-gray-link dark:text-custom-dark-text hover:text-custom-blue dark:hover:text-custom-blue transition ease-in-out "
                    >
                    {heading.text}
                    </ScrollLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  };
  
  export default TableOfContents;