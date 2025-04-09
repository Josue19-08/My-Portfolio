import { Home } from "@/components/sections/home"
import { Projects } from "@/components/sections/projects"
import { Contributions } from "@/components/sections/contributions"
import { TechStack } from "@/components/sections/tech-stack"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Timeline } from "@/components/sections/timeline"
import { Navigation } from "@/components/navigation/orbital-menu"
import { Navbar } from "@/components/navigation/navbar"

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10 dark:bg-black bg-white">
        <div className="stars-container dark:opacity-100 opacity-0"></div>
        <div className="nebula-overlay dark:opacity-100 opacity-0"></div>
      </div>
      <Navbar />
      <Navigation />
      <div className="container mx-auto px-4 pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>
        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>
        <section id="contributions" className="min-h-screen py-20">
          <Contributions />
        </section>
        <section id="tech-stack" className="min-h-screen py-20">
          <TechStack />
        </section>
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        <section id="timeline" className="min-h-screen py-20">
          <Timeline />
        </section>
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </div>
    </main>
  )
}
