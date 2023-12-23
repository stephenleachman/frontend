import React from 'react'
import { ProjectPageDetails, ProjectPageHero, ProjectPageProjectType, ProjectPageProjectView, ProjectPageShare } from '../../_components';
import { ContactSection } from '@/app/_global_components';

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
    <main className="overflow-hidden bg-custom-gray dark:bg-custom-dark-4">
      <section id="home" className="px-4 md:px-10 flex justify-center pb-5">
        <ProjectPageHero project={project}/>
      </section>
      <section id="Details" className="px-4 md:px-10 flex justify-center pb-10">
        <div className="container">
          <div className="flex gap-5">
            <div className="flex-auto w-full">
              <ProjectPageDetails project={project}/>
            </div>
            <div className="lg:min-w-[350px] xl:min-w-[400px] gap-5 flex-col hidden lg:flex">
              <ProjectPageProjectType project={project}/>
              <ProjectPageProjectView project={project}/>
              <ProjectPageShare project={project}/>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  )
}
export default projectPage;