import React from 'react'

async function fetchPost(slug: string) {
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