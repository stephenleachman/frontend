import Link from "next/link";
import RecentProjects from "../_components/RecentProjects";

function FeaturedProjects() {
    return (
      <div>
        <div className="flex justify-center">
          <div className="container grid z-10 py-24">
            <h2 className="text-center text-5xl	dark:text-gray-50 text-custom-dark-2 tracking-wide">Recent Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded justify-self-center my-8"></div>
            <Link
              href="/projects"
              className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold mb-5"
            >
              View Projects Page
            </Link>

            <div className="grid grid-cols-3 gap-8">
              <RecentProjects />
              <RecentProjects />
              <RecentProjects />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default FeaturedProjects
  