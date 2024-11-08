import Link from "next/link";
import { ProjectCard, ProjectModal } from "@/app/_global_components";


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
    <div>
      <div className="flex justify-center">
        <div className="container grid z-10 py-16 md:py-24">
          <h2 className="text-center text-5xl	text-heading-text font-medium tracking-wide">My <span className="bg-gradient-to-b from-primary-2 to-primary-1 bg-clip-text text-transparent">Projects</span></h2>
          <span className="text-center text-p-text font-medium leading-relaxed text-lg mt-5">Explore My Latest Web Development Projects</span>
          <div className="h-1 w-20 bg-gradient-to-b from-primary-1 to-primary-2 rounded justify-self-center my-8"></div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="text-p-text mb-3 sm:mb-0">
              Latest Projects
            </span>
            <div className="hidden sm:block my-2">
              <Link
                href="/projects"
                className="text-link-text underline underline-offset-8 decoration-dotted decoration-2 decoration-primary-1 tracking-wide hover:text-primary-1 hover:transition-all font-semibold	"
              >
                👉 View Project Portfolio
              </Link>
            </div>
          </div>
          <div className="grid grid-col md:grid-cols-2 xl:grid-cols-3 gap-8">
            {Projects && Projects.data.map((project: any) => ( <ProjectCard key={project.id} project={project}/>))}
          </div>
          <div className="sm:hidden mt-10">
            <Link
              href="/projects"
              className="text-link-text underline underline-offset-8 decoration-dotted decoration-2 decoration-primary-1 tracking-wide hover:text-primary-1 hover:transition-all font-semibold"
            >
              👉 View Project Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
