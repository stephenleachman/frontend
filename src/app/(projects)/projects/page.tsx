import { Hero, ShowCase } from "./_sections";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Stephen Leachman - My Projects',
  description: 'Check out my web design and development projects. Discover the endless passability using the latest and greatest web-based technologies.',
}

export default function page() {
  return (
    <main className="overflow-hidden bg-custom-gray dark:bg-custom-dark-4">
      <section id="home" className="px-4 md:px-10 dark:bg-custom-dark-3 border-b-[3px] border-white dark:border-custom-dark-1 relative">
        <Hero />
      </section>
      <section className="px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4 border-b-[3px] border-white dark:border-custom-dark-1 relative">
        <ShowCase />
        {/* <div className="container">
          <h2 className="text-1xl text-center">
            Projects Coming Soon!
          </h2>
        </div> */}
      </section>
    </main>
  )
}
