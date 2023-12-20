import React from 'react'
import { ProjectPageHero } from '../../_components';

async function fetchProject(slug: any) {
    const options ={
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/project/${slug}?populate=*`, 
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
  

const projectPage = async ({params}: any) => {

    const project = await fetchProject(params.slug)
    // console.log(project);
  return (
    <main className="overflow-hidden bg-custom-gray-1 dark:bg-custom-dark-3">
      <section id="home" className="px-4 md:px-10 flex justify-center pb-5">
        <ProjectPageHero project={project}/>
      </section>
      {/* <h1>{project.data.attributes.project_name}</h1> */}
    </main>
  )
}
export default projectPage;