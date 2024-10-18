import { ProjectCard } from "@/app/_global_components";


async function fetchProjects() {
  const options ={
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/portfolio?populate=*`, 
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

async function RecentProjects() {

  const Projects = await fetchProjects(); 

  return (
    <div className="flex justify-center">
      {/* <div className="container grid z-10 py-10 md:py-10 mb-16 sm:mb-0">
        <div className="grid grid-col md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Projects && Projects.data.map((project: any) => ( <ProjectCard key={project.id} project={project}/>))}
        </div>
      </div> */}
    </div>
  )
}

export default RecentProjects
