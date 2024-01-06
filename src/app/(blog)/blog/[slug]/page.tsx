import { Metadata, ResolvingMetadata } from 'next';

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
    // console.log(project);
  return (
    <div>
      <h1>{post.data.attributes.title}</h1>
    </div>
  )
}
export default postPage;