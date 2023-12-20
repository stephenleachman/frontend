import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

async function fetchSkill() {
  const options ={
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/my-skills?populate=*`, 
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

export default async function FetchSkills() {

  const Skills = await fetchSkill(); 

  const Development = 'Web Design & Development';
  const Marketing = 'Digital Marketing';
  const Business = 'Business';
  const Trading = 'Trading & Investing';


  return (
    <div>
      <p className="leading-relaxed dark:text-custom-dark-text text-custom-dark-2 mb-2">
        Web Design & Development
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"> 
        {Skills?.data?.map((item: any) => ( item.attributes.skill_category === Development && (
            <div key={item.id} className="rounded-md h-20 max-w-full bg-white font-semibold	 dark:bg-custom-dark-2 overflow-hidden relative flex flex-row drop-shadow	">
            <div  className="relative h-full w-20">
              <Image 
                src={item.attributes.skill_icon.data.attributes.url}
                alt={item.attributes.skill_type}
                fill={true}
                className="item"
                sizes="max-width: 95px"
                >
              </Image>
            </div>
            <div className="p-2 grid content-center">
              <h4 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide ml-3 mr-6">{item.attributes.skill_type}</h4>
              {/* <div className="dark:text-custom-dark-text text-custom-gray-link top-3 2 right-3 absolute">
                <FaExternalLinkAlt />
              </div> */}
            </div>
          </div>
        )
        ))}
      </div>

      <p className="leading-relaxed dark:text-custom-dark-text text-custom-dark-2 mb-2 mt-8">
        Digital Marketing
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"> 
        {Skills?.data?.map((item: any) => ( item.attributes.skill_category === Marketing && (
            <div key={item.id} className="rounded-md h-20 max-w-full bg-white font-semibold	 dark:bg-custom-dark-2 overflow-hidden relative flex flex-row shadow-md">
            <div  className="relative h-full w-20">
              <Image 
                src={item.attributes.skill_icon.data.attributes.url}
                alt={item.attributes.skill_type}
                fill={true}
                className="item"
                sizes="max-width: 95px"
                >
              </Image>
            </div>
            <div className="p-2 grid content-center">
              <h4 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide ml-3 mr-6">{item.attributes.skill_type}</h4>
              {/* <div className="dark:text-custom-dark-text text-custom-gray-link top-3 2 right-3 absolute">
                <FaExternalLinkAlt />
              </div> */}
            </div>
          </div>
        )
        ))}
      </div>

      <p className="leading-relaxed dark:text-custom-dark-text text-custom-dark-2 mb-2 mt-8">
        Business
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"> 
        {Skills?.data?.map((item: any) => ( item.attributes.skill_category === Business && (
            <div key={item.id} className="rounded-md h-20 max-w-full bg-white font-semibold	 dark:bg-custom-dark-2 overflow-hidden relative flex flex-row drop-shadow-md	">
            <div  className="relative h-full w-20">
              <Image 
                src={item.attributes.skill_icon.data.attributes.url}
                alt={item.attributes.skill_type}
                fill={true}
                className="item"
                sizes="max-width: 95px"
                >
              </Image>
            </div>
            <div className="p-2 grid content-center">
              <h4 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide ml-3 mr-6">{item.attributes.skill_type}</h4>
              {/* <div className="dark:text-custom-dark-text text-custom-gray-link top-3 2 right-3 absolute">
                <FaExternalLinkAlt />
              </div> */}
            </div>
          </div>
        )
        ))}
      </div>

      <p className="leading-relaxed dark:text-custom-dark-text text-custom-dark-2 mb-2 mt-8">
        Trading & Investing
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"> 
        {Skills?.data?.map((item: any) => ( item.attributes.skill_category === Trading && (
            <div key={item.id} className="rounded-md h-20 max-w-full bg-white font-semibold	 dark:bg-custom-dark-2 overflow-hidden relative flex flex-row drop-shadow	">
            <div  className="relative h-full w-20">
              <Image 
                src={item.attributes.skill_icon.data.attributes.url}
                alt={item.attributes.skill_type}
                fill={true}
                className="item"
                sizes="max-width: 95px"
                >
              </Image>
            </div>
            <div className="p-2 grid content-center">
              <h4 className="text-custom-dark-2 dark:text-gray-50 text-2xl tracking-wide ml-3 mr-6">{item.attributes.skill_type}</h4>
              {/* <div className="dark:text-custom-dark-text text-custom-gray-link top-3 2 right-3 absolute">
                <FaExternalLinkAlt />
              </div> */}
            </div>
          </div>
        )
        ))}
      </div>
    </div>
  )
}
