'use client';
import { Badge, BlogCard } from "@/app/_global_components";
import {Input} from "@nextui-org/react";
import { IoMdSearch } from "react-icons/io";

export default function ProjectCard(props: any) {

  return (

    <div className="hidden">


    <div id="card" className="rounded-xl max-w-full bg-white font-semibold dark:bg-custom-dark-3 overflow-hidden flex flex-col drop-shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 lg:w-[400px] h-max mb-5 ">
      <div id="cardBody" className="p-5">
        <div className="flex flex-col">
          <h3 className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-sm font-normal mb-2">
            Search Articles
          </h3>
          <Input
            type="name"
            placeholder="Search"
            labelPlacement="outside"
            variant="faded"
            radius="sm"
            startContent={
              <IoMdSearch className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
            classNames={{
              inputWrapper: "bg-custom-gray-1 dark:bg-custom-dark-4 shadow-none	border-custom-gray-text dark:border-custom-dark-2"
            }}
            />
            <h3 className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-sm font-normal mb-2 mt-5 border-b dark:border-custom-dark-1 border-custom-gray-text pb-2">
              Filter Categories 
            </h3>
            <ul className="flex flex-row gap-3 mt-2">
              {props.Posts.data.map((category: any) => (      
                <li key={category.id}>
                 {category.attributes.blog_categories.data.map((postCategories: any) => (  
                  <button 
                  // onClick={filter}
                  key={postCategories.id}
                  > 
                    <Badge 
                      title={postCategories.attributes.category}
                      style={{'background': postCategories.attributes.bg_hex_color, 'color': postCategories.attributes.text_hex_color}}
                    />
                  </button>
                 ))}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>

    </div>
    
  )
}
