// 'use client'
import { About, Education, FeaturedPosts, FeaturedProjects, Hero, Work } from '@/app/(landing)/_sections/index'
import { FaChevronCircleDown  } from "react-icons/fa";
import Link from 'next/link';
// import { ThemeProvider } from 'next-themes';
// import {NextUIProvider} from "@nextui-org/system";

export default function Home() {

  return (
      <main className="overflow-hidden " >
        <section id="#" className="px-4 md:px-10 tall:h-screen grid content-center  dark:bg-custom-dark-3 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <Hero />
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
        <section id="projects" className="px-4 md:px-10 bg-custom-gray-1 dark:bg-custom-dark-4 relative border-b-[3px] border-white dark:border-custom-dark-1">
          <FeaturedProjects />
        </section>
        <section id="blog" className="h-[1500px]">
          <FeaturedPosts />
        </section>
      </main>
  )
}


