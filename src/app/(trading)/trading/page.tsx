import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Stephen Leachman - Trading',
  description: 'With a genuine passion for trading the financial markets, my trading site is the hub for all my trading activities. ',
}


function page() {
  return (
    <div className="bg-custom-gray dark:bg-custom-dark-4 h-screen grid place-content-center px-4 md:px-10 mb-[-100px]">
      <div className="flex justify-center ">
        <div className="container pb-[300px]">
          <h1 className="text-5xl md:text-7xl tracking-wide bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent pb-2 text-center">My Trading</h1>
          <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg mt-5 md:mt-10 lg:max-w-[700px] text-center">
          🚧 This page is currently in development. Stay tuned! 🚧
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
