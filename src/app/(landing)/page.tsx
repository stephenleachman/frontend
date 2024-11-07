// 'use client'
import { About, Education, FeaturedPosts, RecentProjects, Hero, Work, HeroMobile, } from '@/app/(landing)/_sections/index';
import PageHeadNav from './_components/PageHeadNav';
import { ContactSection } from '../_global_components';

export default function Home() {

  return (
      <main className="overflow-hidden relative" >
        <PageHeadNav />
        <section id="home" className="px-4 md:px-10 tall:h-screen content-center bg-background-4 relative border-b-[3px] border-border hidden lg:grid">
          <Hero />
        </section>
        <section id="home" className="lg:hidden">
          <HeroMobile />
        </section>
        <section id="about" className="px-4 md:px-10 bg-gradient-to-b from-background-3 to-background-4 relative border-b-[3px] border-border">
          <About />
        </section>
        <section id="education" className="px-4 md:px-10 bg-background-3 relative border-b-[3px] border-border">
          <Education />
        </section>
        <section id="work" className="px-4 md:px-10 bg-gradient-to-b from-background-4 to-background-3 relative border-b-[3px] border-border">
          <Work />
        </section>
        <section id="projects" className="px-4 md:px-10 bg-background-4 relative border-b-[3px] border-border">
          <RecentProjects />
        </section>
        <section id="blog" className="px-4 md:px-10 bg-gradient-to-b from-background-3 to-background-4 relative border-b-[3px] border-border">
          <FeaturedPosts />
        </section>
        <ContactSection />
      </main>
  )
}


