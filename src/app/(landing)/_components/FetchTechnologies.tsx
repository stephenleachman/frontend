import Image from "next/image";
import {Tooltip} from "@nextui-org/react";

async function FetchTech() {
  const options ={
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/technologies?populate=*`, 
    {
      next: {
        revalidate: 5,
      }
    }
    );
    const response = await res.json();
    return response;
  }catch (err) {
    console.error(err);
  }
}
export default async function FetchTechnologies() {

  const Softwares = await FetchTech(); 

  return (
    <div>
      <p className="leading-relaxed dark:text-custom-dark-text text-custom-dark-2 mb-2">
        Development Technologies I Use
      </p>
    <div className="flex gap-3 flex-wrap">
      {Softwares?.data?.map((item: any) => (
        <div key={item.id} className="rounded-md h-14 w-14 bg-white font-semibold dark:bg-custom-dark-2 overflow-hidden relative flex shadow hover:shadow-lg transition-shadow cursor-pointer">
          <Tooltip radius="sm" showArrow={true} content={item.attributes.title}>
            <div className="relative h-full w-20">
              <Image 
                src={item.attributes.icon.data.attributes.url}
                alt={item.attributes.title}
                fill={true}
                className="item"
                sizes="max-width: 95px"
                >
              </Image>
            </div>
          </Tooltip>
        </div>
        )
      )}
      </div>
    </div>
  )
}
