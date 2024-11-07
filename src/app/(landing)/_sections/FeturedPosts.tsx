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
          {/* <div className="bg-gradient-to-b  from-custom-dark-2 via-custom-dark-3 to-custom-dark-4 absolute h-full w-full dark:block hidden z-0"></div> */}
          <div className="container grid z-10 py-16 md:py-24">
          <h2 className="text-center text-5xl	text-heading-text font-medium tracking-wide">My <span className="bg-gradient-to-b from-primary-2 to-primary-1 bg-clip-text text-transparent">Blog</span></h2>
          <span className="text-center text-p-text font-medium leading-relaxed text-lg mt-5">Business, Web Development, and Trading</span>
          <div className="h-1 w-20 bg-gradient-to-b from-primary-1 to-primary-2 rounded justify-self-center my-8"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <p className="text-p-text mb-3 sm:mb-0">
                Featured Articles
              </p>
              <div className="hidden sm:block my-2">
                <Link
                  href="/blog"
                  className="text-link-text underline underline-offset-8 decoration-dotted decoration-2 decoration-primary-1 tracking-wide hover:text-primary-1 hover:transition-all font-semibold"
                >
                  👉 View All Articles
                </Link>
              </div>
            </div>
            <div className="grid grid-col md:grid-cols-2 xl:grid-cols-3 gap-8">
              {Posts && Posts.data.map((post: any) => ( <BlogCard key={post.id} post={post}/>))}
            </div>
            <div className="block sm:hidden mt-10">
              <Link
                href="/blog"
                className="text-link-text underline underline-offset-8 decoration-dotted decoration-2 decoration-primary-1 tracking-wide hover:text-primary-1 hover:transition-all font-semibold"
              >
                👉 View All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default FeaturedPosts
  