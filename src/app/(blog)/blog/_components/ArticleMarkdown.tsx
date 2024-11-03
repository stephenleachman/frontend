'use client'

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

interface Heading {
    id: string;
    text: string;
    level: number;
  }
  
  interface ArticleProps {
    content: string;
  }
  
  const ArticleMarkdown: React.FC<ArticleProps> = ({ content }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);
  
    useEffect(() => {
      const extractedHeadings: Heading[] = [];
  
      // A function to extract headings without rendering the entire markdown
      const extractHeadings = (markdown: string) => {
        const lines = markdown.split('\n');
  
        lines.forEach(line => {
          const h2Match = line.match(/^## (.+)/); // Matches h2
          const h3Match = line.match(/^### (.+)/); // Matches h3
  
          if (h2Match) {
            const text = h2Match[1];
            const id = text.toLowerCase().replace(/\s+/g, '');
            extractedHeadings.push({ id, text, level: 2 });
          } else if (h3Match) {
            const text = h3Match[1];
            const id = text.toLowerCase().replace(/\s+/g, '');
            extractedHeadings.push({ id, text, level: 3 });
          }
        });
  
        setHeadings(extractedHeadings);
      };
  
      extractHeadings(content);
    }, [content]);
  
    return (
      <article className="markdown">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]}
          components={{
            h2: ({ node, children }) => {
              const id = (children as string).toLowerCase().replace(/\s+/g, '');
              return <h2 id={id}>{children}</h2>;
            },
            h3: ({ node, children }) => {
              const id = (children as string).toLowerCase().replace(/\s+/g, '');
              return <h3 id={id}>{children}</h3>;
            },
          }}
        />
      </article>
    );
  };
  
  export default ArticleMarkdown;
