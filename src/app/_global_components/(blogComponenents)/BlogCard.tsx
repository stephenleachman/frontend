'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge, ButtonThemed } from '@/app/_global_components';
import { FaRegCalendarAlt } from "react-icons/fa";
import React from "react";

export default function BlogCard(props: any) {

  const truncatePostDesc  = props.post.attributes.summery.length > 150 ? 
  props.post.attributes.summery.substring(0, 150) + "..." : props.post.attributes.summery;

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };

  return (
    <div id="card" className="rounded-xl max-w-full bg-white font-semibold dark:bg-custom-dark-3 overflow-hidden relative flex flex-col shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2">
      <div id="cardHeader" className="max-h-[300px] flex items-center relative overflow-hidden border-b border-gray-100 dark:border-custom-dark-2">
        <Image 
          src={props.post.attributes.clover_image.data.attributes.formats.medium.url} 
          alt={props.post.attributes.clover_image.data.attributes.alternativeText}  
          height={300}
          width={500}
          className="cover w-full"
        >
        </Image>
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
    <div id="cardBody" className="p-5">
      <div className="flex mb-3 text-xs items-center font-normal dark:text-custom-dark-text text-custom-dark-1">
        <FaRegCalendarAlt />
        <p className="text-sm ml-2 mt-[2px]">{new Date(props.post.attributes.published).toLocaleDateString('en-US', options)}</p>
      </div>
      <h3 className="text-2xl dark:text-custom-gray-1 text-custom-dark-2 font-semibold dark:font-normal mb-5">
        {props.post.attributes.title}
      </h3>
      <p className="leading-relaxed text-custom-dark-1 dark:text-custom-dark-text font-normal	">
        {truncatePostDesc}
      </p>
      <div className="mt-5">
        <ButtonThemed 
          color="gray" 
          size="lg"
          radius="sm"
          href={`/blog/${props.post.attributes.slug}`}
          as={Link}
          className="font-medium dark:text-custom-gray-1 text-custom-dark-2"
          >
          Read Article
        </ButtonThemed>
      </div>
    </div>
    </div>
  )
}
