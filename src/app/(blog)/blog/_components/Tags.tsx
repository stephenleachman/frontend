import { Badge } from "@/app/_global_components"
import { FaHashtag } from "react-icons/fa";


export default function Tags(tags: any) {

  const Tags = tags.tags;

  return (
    <div>
      <ul className="flex flex-wrap flex-row gap-1 text-custom-gray-1">
        {Tags.map((blog_tags: any) => (
          <li key={blog_tags.id}>
            <Badge 
              title={
                <span className="flex flex-nowrap items-center">
                  <span className="mr-1"><FaHashtag /></span> {blog_tags.attributes.tag}
                </span>
              }
              classStyles={"bg-background-4 text-p-text font-medium text-sm"}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
