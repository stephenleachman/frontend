// 'use client'
import { About, Education, FeaturedPosts, RecentProjects, Hero, Work, HeroMobile, } from '@/app/(landing)/_sections/index';
import PageHeadNav from './_components/PageHeadNav';
import { ContactSection } from '../_global_components';

export default function Home() {

  return (
      <main className="overflow-hidden relative" >
        <PageHeadNav />
        <section id="home" className="px-4 md:px-10 tall:h-screen content-center dark:bg-custom-dark-3 relative border-b-[3px] border-white dark:border-custom-dark-1 hidden lg:grid">
          <Hero />
        </section>
        <section id="home" className="lg:hidden">
          <HeroMobile />
        </section>
        <section id="about" className="px-4 md:px-10 bg-custom-gray-1 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <About />
        </section>
        <section id="education" className="px-4 md:px-10 bg-custom-gray-1 dark:bg-custom-dark-3 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <Education />
        </section>
        <section id="work" className="px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <Work />
        </section>
        {/* <section id="projects" className="px-4 md:px-10 bg-custom-gray-1 dark:bg-custom-dark-4 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <RecentProjects />
        </section>
        <section id="blog" className="px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <FeaturedPosts />
        </section> */}
        <ContactSection />
      </main>
  )
}


