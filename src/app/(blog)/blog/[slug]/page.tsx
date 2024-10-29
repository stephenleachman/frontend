import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

async function fetchPost(slug: any) {
    const options ={
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog/${slug}?populate=*`, 
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
    const post = await fetchPost(params.slug)
    const title = post.data.attributes.title;
    const slug = post.data.attributes.slug;
    const summery = post.data.attributes.summery;
    // const imgUrl = post.data.attributes.project_cover.data[0].attributes.url;
    const previousImages = (await parent).openGraph?.images || [];
    return {
      title: `Stephen Leachman - ${title}`,
      description: summery,
      openGraph: {
        title: title,
        description: summery,
        url: `https://stephenleachman.com/blog/${slug}`,
        siteName: "Stephen Leachmans Personal Portfolio",
        // images: [ imgUrl, ...previousImages ],
        locale: 'en_US',
        type: 'website',
      },
    };
  };
  

const postPage = async ({params}: any) => {

    const post = await fetchPost(params.slug)
    // console.log(post);
    // console.log(post.data.attributes.clover_image.data.attributes.formats)
  return (
    <>
      <div className="dark:bg-custom-dark-3 border-b-[3px] border-white dark:border-custom-dark-1 absolute top-0 left-0 h-[500px] w-full">
      <div className="bg-gradient-to-r from-custom-Opacity-blue to-custom-Opacity-green absolute h-full w-full dark:hidden"></div>
      </div>

      <div className="flex justify-center sm:px-4 md:px-10 z-10">
        <div className="container relative z-10 text-center mt-10">
          {/* <h1 className="max-w-[700px] text-5xl	inline-block leading-normal">{post.data.attributes.title}</h1> */}
          {/* <div className="w-[100px] h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 justify-self-center m-10 "></div> */}
          <div className="sm:rounded-xl sm:shadow sm:ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 bg-white dark:bg-custom-dark-3 overflow-hidden h-[1000px] ">
          <div className="max-h-[550px] w-full overflow-hidden relative">
            <div className="h-full w-full bg-black absolute opacity-50"></div>
            
            <Image 
              src={post.data.attributes.clover_image.data.attributes.formats.large.url} 
              alt={post.data.attributes.clover_image.data.attributes.alternativeText}  
              height={500}
              width={1600}
              quality={100}
              // style={{objectFit: "fill"}}
               className="object-cover select-none max-h-[550px] sm:rounded-lg"
            >
            </Image>
          </div>
          <h1 className="max-w-[700px] text-5xl leading-normal z-10 w-full text-center">{post.data.attributes.title}</h1>
          <p className="leading-normal">{post.data.attributes.artical}</p>
          </div>
        </div>
      </div>
      

    </>
  )
}
export default postPage;