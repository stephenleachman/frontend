import { BlogShowcase, Hero, } from "./_sections";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Stephen Leachman - My Blog',
  description: 'My blog contains helpful articles relating to topics such as Business, Trading, Web Design, and Coding.',
}

export default function page() {
  return (
    <main className="overflow-hidden bg-custom-gray dark:bg-custom-dark-4">
      <section id="home" className="px-4 md:px-10 dark:bg-custom-dark-3 border-b-[3px] border-white dark:border-custom-dark-1 relative">
        <Hero />
      </section>
      <section className="px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4">
        <BlogShowcase />
      </section>
    </main>
  )
}
