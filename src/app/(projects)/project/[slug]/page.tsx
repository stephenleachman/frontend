import React from 'react'

async function fetchProject(slug: string) {
    const options ={
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/project/${slug}?populate=*`, 
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
  

const projectPage = async ({params}: any) => {

    const project = await fetchProject(params.slug)
    // console.log(project);
  return (
    <div>
      <h1>{project.data.attributes.project_name}</h1>
    </div>
  )
}
export default projectPage;