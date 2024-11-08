import { ContactEmail, ContactSection } from '@/app/_global_components';
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
  // const previousImages = (await parent).openGraph?.images || [];
  return {
    title: `Stephen Leachman - ${title}`,
    description: overvierw,
    openGraph: {
      title: title,
      description: overvierw,
      url: `https://stephenleachman.com/project/${slug}`,
      siteName: "Stephen Leachmans Personal Portfolio",
      images: [ imgUrl ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: overvierw,
      creator: "Stephen Leachman",
      images: [
        {
          url: imgUrl,
          width: 1200,
          height: 630,
          alt: "Project Image",
        },
      ],
    }
  };
};

const projectPage = async ({params}: any) => {

  const project = await fetchProject(params.slug)
  const fetchProjectTech = await fetchProjectTechnologies(params.slug)

  return (
    <>
    <div className="flex justify-center sm:px-4 md:px-10 ">
      <div className="container ">
        <main className="bg-background-3 dark:bg-background-4">
          <section id="home" className="flex justify-center ">
            <ProjectPageHero project={project}/>
          </section>
          <section id="Details" className="flex justify-center sm:pb-5 border-t-[3px] border-border sm:border-none ">

            <div className="">
              <div className="flex flex-col-reverse lg:flex-row sm:gap-5">
                <div className="flex-auto w-full lg:mt-5">
                  <ProjectPageDetails project={project}/>
                  <div className="lg:hidden sm:mt-5">
                    <ProjectPageShare project={project} />
                  </div>
                </div>

                  <div className="lg:min-w-[320px] xl:min-w-[370px] lg:max-w-[320px] xl:max-w-[450px] flex flex-col sm:gap-5">
                    <div className="top-0 sticky sm:pt-5">
                      <div className="flex flex-col sm:gap-5">
                        <ProjectPageProjectType project={project}/>
                        <ProjectPageProjectTechStack fetchProjectTech={fetchProjectTech}/>
                        <ProjectPageProjectDependencies project={project}/>
                        <div className="hidden lg:block">
                          <ProjectPageShare project={project} />
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </section>
        </main>
        </div>
      </div>
    <div className="sm:border-t-[3px] border-border bg-background-3">
        <ContactSection/>
      </div>
    </>
  )
}
export default projectPage;