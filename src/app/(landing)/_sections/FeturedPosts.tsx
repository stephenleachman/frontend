import Link from "next/link"
import { BlogCard } from "@/app/_global_components"

async function fetchblogs() {
  const options ={
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`, 
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

async function FeaturedPosts() {

  const Posts = await fetchblogs(); 
 
    return (
      <div>
         <div className="flex justify-center">
          <div className="bg-gradient-to-b  from-custom-dark-2 via-custom-dark-3 to-custom-dark-4 absolute h-full w-full dark:block hidden z-0"></div>
          <div className="container grid z-10 py-16 md:py-24">
            <h2 className="text-center text-5xl	dark:text-gray-50 text-custom-dark-2 tracking-wide">My Blog</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded justify-self-center my-8"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-5">
              <p className="">
                My Featured Articles
              </p>
              <div className="hidden sm:block">
                <Link
                  href="/blog"
                  className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold mb-5 mt-5 sm:mt-0 inline-block"
                >
                  View All Articles
                </Link>
              </div>
            </div>
            <div className="grid grid-col md:grid-cols-2 xl:grid-cols-3 gap-8">
              {Posts && Posts.data.map((post: any) => ( <BlogCard key={post.id} post={post}/>))}
            </div>
            <div className="block sm:hidden">
              <Link
                href="/blog"
                className="text-custom-dark-2 dark:text-gray-50 tracking-wide hover:opacity-75 transition-opacity font-semibold mb-5 mt-5 sm:mt-0 inline-block"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default FeaturedPosts
  