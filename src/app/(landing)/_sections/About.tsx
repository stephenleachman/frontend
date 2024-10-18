async function fetchAboutMe() {
    const options ={
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/about-me-all`, );
      const response = await res.json();
      return response;
    }catch (err) {
      console.error(err);
    }
  }
  
  export default async function About() {

    const aboutMe = await fetchAboutMe();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    console.log(aboutMe)
      // Sorting the data by date in descending order (newest first)
    aboutMe?.data?.sort((a: any, b: any) => new Date(a.attributes.date).getTime() - new Date(b.attributes.date).getTime());

    return (
      
      <div className="flex justify-center">
          <div className="bg-gradient-to-b  from-custom-dark-2 via-custom-dark-3 to-custom-dark-4 absolute h-full w-full dark:block hidden z-0"></div>
        <div className="container grid z-10 py-16 md:py-24">
          <h2 className="text-center text-5xl	tracking-wide">A Bit About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded justify-self-center my-8"></div>
        
          <div className="flex justify-center">
          <ul className="max-w-[1000px] mt-0">
  
  
            {aboutMe?.data?.map((item: any) => (
              <li key={item.attributes.date} className="relative pl-8 sm:pl-32 py-6 group">
              {/* <h2 key={item.title} className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">{item.attributes.heading}</h2> */}
                <div 
                className="flex flex-col sm:flex-row items-start mb-1 
                group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:dark:bg-custom-dark-1 before:bg-gray-200 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
                after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:dark:bg-custom-gray-1 after:bg-custom-dark-2 after:border-4 after:box-content after:border-gray-200 after:dark:border-custom-dark-1 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time key={item.data} className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-sky-600 bg-sky-100 rounded-md ">{new Date(item.attributes.date).toLocaleDateString('en-US', options)}</time>
                  <h3 key={item.title} className="text-xl dark:text-custom-gray-1 text-custom-dark-2 font-semibold dark:font-normal	">{item.attributes.title}</h3>
                </div>
                <p key={item.paragraph} className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed">{item.attributes.paragraph}</p>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }