import { Hero, ShowCase } from "./_sections";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Stephen Leachman - My Projects',
  description: 'Check out my web design and development projects. Discover the endless passability using the latest and greatest web-based technologies.',
}

export default function page() {
  return (
    <main className="overflow-hidden bg-background-4">
      <section id="home" className="px-4 md:px-10 bg-background-4 dark:bg-background-3 border-b-[3px] border-border relative">
        <Hero />
      </section>
      <section className="px-4 md:px-10 bg-background-3 dark:bg-background-4">
        <ShowCase />
      </section>
    </main>
  )
}
