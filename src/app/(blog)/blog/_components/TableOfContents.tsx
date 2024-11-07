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
      <div className="rounded-xl max-w-full shadow overflow-hidden ring-1 ring-primary-1 p-5 sm:py-5 mt-5">
        <nav>
          <h2 className=" text-xl font-medium mb-5 text-heading-text">📖 Table of Contents</h2>
          <ul  role="list" className="list-disc pl-5 text-sm ">
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
                    offset={-60}
                    hashSpy={false}
                    className="cursor-pointer text-link-text hover:text-primary-1 transition ease-in-out"
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