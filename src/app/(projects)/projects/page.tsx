import { Hero, ShowCase } from "./_sections";

export default function page() {
  return (
    <main className="overflow-hidden bg-custom-gray dark:bg-custom-dark-4">
      <section id="home" className="px-4 md:px-10 dark:bg-custom-dark-3 border-b-[3px] border-white dark:border-custom-dark-1 relative">
        <Hero />
      </section>
      <section className="px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4">
        <ShowCase />
      </section>
    </main>
  )
}
