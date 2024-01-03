import { ProjectPageDetails, ProjectPageHero, ProjectPageProjectDependencies, ProjectPageProjectTechStack, ProjectPageProjectType, ProjectPageShare } from '../../_components';
import { Metadata, ResolvingMetadata } from 'next'

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

async function fetchProjectTechnologies(slug: any) {
  const options ={
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/project/${slug}?populate=technologies.icon`, 
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

export async function generateMetadata({ params }: { params: {slug: string}; }, parent: ResolvingMetadata): Promise<Metadata> {
  const project = await fetchProject(params.slug)
  const title = project.data.attributes.project_name;
  const slug = project.data.attributes.slug;
  const overvierw = project.data.attributes.overvierw;
  const imgUrl = project.data.attributes.project_cover.data[0].attributes.url;
  const previousImages = (await parent).openGraph?.images || [];
  // console.log(slug)
  return {
    title: `Stephen Leachman - ${title}`,
    description: overvierw,
    openGraph: {
      title: title,
      description: overvierw,
      url: `https://stephenleachman.com/project/${slug}`,
      siteName: "Stephen Leachmans Personal Portfolio",
      images: [ imgUrl, ...previousImages ],
      locale: 'en_US',
      type: 'website',
    },
  };
};

const projectPage = async ({params}: any) => {

  const project = await fetchProject(params.slug)
  const fetchProjectTech = await fetchProjectTechnologies(params.slug)

  return (
    
    <main className="overflow-hidden bg-custom-gray dark:bg-custom-dark-4">
      <section id="home" className="px-0 sm:px-4 md:px-10 flex justify-center sm:pb-5">
        <ProjectPageHero project={project}/>
      </section>
      <section id="Details" className="sm:px-4 md:px-10 flex justify-center sm:pb-10 border-y-[3px] border-custom-gray-1 dark:border-custom-dark-1 sm:border-none">
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row sm:gap-5">
            <div className="flex-auto w-full">
              <ProjectPageDetails project={project}/>
              <div className="lg:hidden sm:mt-5">
                <ProjectPageShare project={project} />
              </div>
            </div>
            <div className="lg:min-w-[350px] xl:min-w-[400px] flex flex-col sm:gap-5">
              <ProjectPageProjectType project={project}/>
              <ProjectPageProjectTechStack fetchProjectTech={fetchProjectTech}/>
              <ProjectPageProjectDependencies project={project}/>
              <div className="hidden lg:block">
              <ProjectPageShare project={project} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default projectPage;