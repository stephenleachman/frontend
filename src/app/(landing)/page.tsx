// 'use client'
import { About, Education, FeaturedPosts, RecentProjects, Hero, Work, } from '@/app/(landing)/_sections/index';
import PageHeadNav from './_components/PageHeadNav';

export default function Home() {

  return (
      <main className="overflow-hidden relative" >
        <PageHeadNav />
        <section id="home" className="section px-4 md:px-10 tall:h-screen grid content-center  dark:bg-custom-dark-3 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <Hero />
        </section>
        <section id="about" className="section px-4 md:px-10 bg-custom-gray-1 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <About />
        </section>
        <section id="education" className="section px-4 md:px-10 bg-custom-gray-1 dark:bg-custom-dark-3 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <Education />
        </section>
        <section id="work" className="section px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <Work />
        </section>
        <section id="projects" className="section px-4 md:px-10 bg-custom-gray-1 dark:bg-custom-dark-4 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <RecentProjects />
        </section>
        <section id="blog" className="section px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4 relative">
          <FeaturedPosts />
        </section>
      </main>
  )
}


