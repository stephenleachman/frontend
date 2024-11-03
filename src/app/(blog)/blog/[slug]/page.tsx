import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { Badge, ButtonThemed, ThemeToggler } from '@/app/_global_components';
import ArticleMarkdown from '../_components/ArticleMarkdown';
import TableOfContents from '../_components/TableOfContents';
import Share from '../_components/Share';
import Author from '../_components/Author';
import Tags from '../_components/Tags';
import Link from 'next/link';
import logo from '@/../public/images/mainMenuIcons/NavLogo.svg'

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
    const imgUrl = post.data.attributes.clover_image.data.attributes.url;
    const previousImages = (await parent).openGraph?.images || [];
    
    return {
      title: `Stephen Leachman - ${title}`,
      description: summery,
      openGraph: {
        title: title,
        description: summery,
        url: `https://stephenleachman.com/blog/${slug}`,
        siteName: "Stephen Leachmans Personal Portfolio",
        images: [ imgUrl, ...previousImages],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: summery,
        creator: "Stephen Leachman",
        images: [
          {
            url: imgUrl,
            width: 1200,
            height: 630,
            alt: "Blog Post Image",
          },
        ],
      }
    };
  };

const postPage = async ({params}: any) => {

    const post = await fetchPost(params.slug);    
    const Category = post.data.attributes.blog_categories.data[0].attributes;
    const content = post.data.attributes.artical
    const tags = post.data.attributes.blog_tags.data

  return (
    <div className="mb-[70px] sm:mb-0">
      <div className="dark:bg-custom-dark-3 sm:border-b-[3px] border-white dark:border-custom-dark-1 relative top-0 left-0 w-full overflow-hidden">
        <section className="flex justify-center z-10 px-4 md:px-10">
          <div className="container relative z-10">
            <div className="absolute top-3 w-full flex justify-between items-center">
            <Link
              href="/"
            >
            <Image
              src={logo}
              alt=""
              width={50}
              height={50}
              className="sm:hidden border-2 border-custom-dark-2 rounded-sm	"
            >
            </Image>
            </Link>
            <ThemeToggler />
          </div>
            </div>
          </section>
        <div className="bg-gradient-to-r from-custom-Opacity-blue to-custom-Opacity-green absolute h-full w-full dark:hidden"></div>

        <section className="flex justify-center sm:px-4 md:px-10 z-10 pt-[80px] sm:pt-[100px] sm:pb-[180px] px-4 mb-5">
          <div className="container relative z-10 text-center">
            <div className="max-w-[980px] justify-self-center">
              <h1 className="text-4xl sm:text-5xl leading-snug sm:leading-normal  inline-block">{post.data.attributes.title}</h1>
              <div className="w-[100px] h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 justify-self-center m-5 "></div>
              <div className="">
                <p className="text-custom-dark-1 dark:text-custom-dark-text leading-7 tracking-wider">
                  {post.data.attributes.summery}
                </p>
              </div>
              <div className="inline-block my-5">
                <Badge 
                  title={Category.category}
                  style={{'background': Category.bg_hex_color, 'color': Category.text_hex_color}}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
          
      <section className="flex justify-center mb-10 m:px-4 md:px-10">
        <div className="container z-10 ">
          <div className="sm:rounded-xl sm:shadow sm:ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 bg-white dark:bg-custom-dark-3 sm:mt-[-110px] ">
            <div className="max-h-[550px] w-full overflow-hidden sm:border-b-[3px] border-white dark:border-custom-dark-1 relative px-5 sm:px-0">
              <div className="h-full w-[92.7%] sm:w-full bg-black absolute opacity-20 sm:rounded-t-xl rounded-xl sm:rounded-b-none"></div>
              <div className="z-30 absolute bottom-2 left-2 hidden sm:block">
                <Tags tags={tags}/>
              </div>
              <Image 
                src={post.data.attributes.clover_image.data.attributes.formats.large.url} 
                alt={post.data.attributes.clover_image.data.attributes.alternativeText}  
                height={500}
                width={1600}
                quality={100}
                className="object-cover select-none max-h-[550px] sm:rounded-t-xl rounded-xl sm:rounded-b-none"
              >
              </Image>             
            </div>

            
              <div className="flex flex-col-reverse lg:flex-row sm:gap-5 px-5 xl:px-10">
                <div className="flex-auto w-full xl:pr-[100px]">
                  <Author post={post}/>
                  <ArticleMarkdown content={content}/>
                  <div className="lg:hidden sm:my-5">
                    <Share post={post}/>
                  </div>
                </div>

                  <div className="lg:w-[420px] xl:w-[500px] flex flex-col sm:gap-5 ">
                    <div className="top-0 sticky sm:pt-5">
                      <div className="flex flex-col sm:gap-5">
                        <div className="z-30 sm:hidden mt-5">
                          <Tags tags={tags}/>
                        </div>
                        <TableOfContents content={content}/>
                        <div className="hidden lg:block">
                         <Share post={post}/>
                        </div>
                      </div>
                    </div>
                  </div>

            </div>
          </div>
        </div>
      </section>
      

    </div>
  )
}
export default postPage;