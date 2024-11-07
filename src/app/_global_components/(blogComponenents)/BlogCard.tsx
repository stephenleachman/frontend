'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge, ButtonThemed } from '@/app/_global_components';
import { FaRegCalendarAlt } from "react-icons/fa";
import React from "react";

export default function BlogCard(props: any) {

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate a network request or some async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const truncatePostDesc  = props.post.attributes.summery.length > 150 ? 
  props.post.attributes.summery.substring(0, 150) + "..." : props.post.attributes.summery;

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };

  return (
    <div id="card" className="rounded-xl max-w-full bg-background-card-2 font-semibold overflow-hidden relative flex flex-col shadow ring-1 ring-ring-color-1">
      <div id="cardHeader" className="max-h-[300px] flex items-center relative overflow-hidden border-b border-ring-color-1">
        <div className="cover w-cover h-[200px]">
          <Image 
            src={props.post.attributes.clover_image.data.attributes.formats.medium.url} 
            alt={props.post.attributes.clover_image.data.attributes.alternativeText}  
            height={300}
            width={800}
            style={{objectFit: "cover"}}
            className="cover w-cover h-[200px]"
          >
          </Image>
        </div>
   
        <div className="absolute bottom-2 left-2">
        {props.post.attributes.blog_categories.data.map((postCategories: any) => (  
          <div key={postCategories.id}>         
          <Badge 
            title={postCategories.attributes.category}
            style={{'background': postCategories.attributes.bg_hex_color, 'color': postCategories.attributes.text_hex_color}}
          />
          </div>
        ))}
        </div>
      </div>
    <div id="cardBody" className="p-5 ">
      <div className="flex mb-3 text-xs items-center font-normal text-p-text">
        <FaRegCalendarAlt />
        <p className="text-sm ml-2 mt-[2px]">{new Date(props.post.attributes.published).toLocaleDateString('en-US', options)}</p>
      </div>
      <h3 className="text-xl text-heading-text font-medium mb-5 ">
        {props.post.attributes.title}
      </h3>
      <p className="leading-relaxed text-p-text font-normal	mb-[70px]">
        {truncatePostDesc}
      </p>
      <div className="mt-5 absolute bottom-5 left-5">
        <ButtonThemed onClick={handleClick} disabled={isLoading}
          color="gray" 
          size="lg"
          radius="sm"
          href={`/blog/${props.post.attributes.slug}`}
          as={Link}
          isLoading={isLoading}
          >
          {isLoading ? "Loading" : "Read Article"}
        </ButtonThemed>
      </div>
    </div>
    </div>
  )
}
