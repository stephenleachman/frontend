import { BlogCard } from "@/app/_global_components";
import { FilterCard } from ".";


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
  
async function BlogShowcase() {

  const Posts = await fetchblogs(); 


  
  return (
    <>
    <div className="flex justify-center mt-7 lg:mt-0">
      <div className="container lg:hidden mb-[-35px]">
        <FilterCard Posts={Posts}/>  
      </div>
    </div>
      <div className="flex justify-center">
        <div className="container grid grid-flow-col gap-8 z-10 py-16 lg:py-24 mb-16 sm:mb-0">
          <div className="grid grid-col md:grid-cols-2  lg:grid-cols-1 xl:grid-cols-2 gap-8">
              {Posts && Posts.data.map((post: any) => ( <BlogCard key={post.id} post={post}/>))}
          </div>
          <div className="grid-col md:grid-cols-1 gap-8 hidden lg:grid">
            <FilterCard Posts={Posts}/>    
          </div>  
        </div>
      </div>
    </>
  )
}

export default BlogShowcase
