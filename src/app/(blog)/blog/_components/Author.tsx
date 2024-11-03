import Image from 'next/image';

export default function Author(post: any) {

  const authorAvatarImage = post.post.data.attributes.author_avatar.data.attributes.formats.thumbnail.url;
  const alternativeText = post.post.data.attributes.author_avatar.data.attributes.alternativeText;
  const publishedOn = post.post.data.attributes.publishedAt;
  const authorName = post.post.data.attributes.author_name;
  
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' };

  return (
    <div className="flex flex-wrap mt-10 mb-[-20px]">
      <div className="rounded-full">
        <Image
            src={authorAvatarImage} 
            alt={alternativeText}  
            height={80}
            width={80}
            className="rounded-full h-[40px] w-[40px] md:h-[80px] md:w-[80px] dark:ring-1 dark:ring-custom-dark-2"
            >
        </Image>
      </div>
      <div className="text-sm ml-5 content-center text-md text-custom-gray-link dark:text-custom-dark-text">
        <h2 className="mb-2 italic">Auther: <span className="ml-2 not-italic font-medium tracking-wide text-custom-dark-2 dark:text-custom-gray-1">{authorName}</span></h2>
        <h2 className="italic">Published: <span className="ml-2 not-italic font-medium tracking-wide text-custom-dark-2 dark:text-custom-gray-1">{new Date(publishedOn).toLocaleDateString('en-US', options)}</span></h2>
      </div>
    </div>
  )
}
