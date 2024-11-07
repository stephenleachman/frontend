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
      // Sorting the data by date in descending order (newest first)
    aboutMe?.data?.sort((a: any, b: any) => new Date(a.attributes.date).getTime() - new Date(b.attributes.date).getTime());

    return (
      
      <div className="flex justify-center">
          {/* <div className="bg-gradient-to-b  from-primary-3 to-primary-4 absolute h-full w-full dark:block hidden z-0"></div> */}
        <div className="container grid z-10 py-16 md:py-24">
          <h2 className="text-center text-5xl	tracking-wide font-medium	text-heading-text">A Bit <span className="bg-gradient-to-b from-primary-2 to-primary-1 bg-clip-text text-transparent ">About</span> Me</h2>
       
          <span className="text-center text-p-text font-medium leading-relaxed text-lg mt-5">Some Achievements and Major Life Events</span>
          <div className="h-1 w-20 bg-gradient-to-b from-primary-1 to-primary-2 rounded justify-self-center my-8"></div>
          <div className="flex justify-center">
          <ul className="max-w-[1000px] mt-0">
  
  
            {aboutMe?.data?.map((item: any) => (
              <li key={item.attributes.date} className="relative pl-8 sm:pl-32 py-6 group">
              {/* <h2 key={item.title} className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">{item.attributes.heading}</h2> */}
                <div 
                className="flex flex-col sm:flex-row items-start mb-1 
                group-last:before:hidden 
                before:absolute 
                before:left-2 
                sm:before:left-0 
                before:h-full 
                before:px-px
                
                // Progress Line color -------------------
                before:dark:bg-background-1 
                before:bg-gray-200 
                
                // Dot Color -----------------------------
                after:bg-p-text

                // Dot Outline ---------------------------
                after:dark:border-custom-dark-1
                after:border-gray-200 

                sm:before:ml-[6.5rem] 
                before:self-start 
                before:-translate-x-1/2 
                before:translate-y-3 
                after:absolute 
                after:left-2 
                sm:after:left-0 
                after:w-2 
                after:h-2   
                after:border-4 
                after:box-content 
                after:rounded-full 
                sm:after:ml-[6.5rem] 
                after:-translate-x-1/2 
                after:translate-y-1.5">

                  <time key={item.data} className="
                    sm:absolute 
                    left-0 
                    translate-y-0.5 
                    inline-flex 
                    items-center 
                    justify-center 
                    text-xs 
                    font-semibold 
                    uppercase 
                    w-20 min-h-6 
                    mb-3 
                    sm:mb-0 
                    text-center 
                    p-1 

                    // Badge Color --------------------
                    text-primary-1 
                    bg-primary-2/10 
                    
                    rounded-md 
                    ">{new Date(item.attributes.date).toLocaleDateString('en-US', options)}</time>

                  <h3 key={item.title} className="text-xl text-heading-text font-semibold dark:font-normal	">{item.attributes.title}</h3>
                </div>
                <p key={item.paragraph} className="text-p-text leading-relaxed">{item.attributes.paragraph}</p>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }