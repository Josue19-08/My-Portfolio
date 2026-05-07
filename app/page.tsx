import { Home } from "@/components/sections/home"
import { Projects } from "@/components/sections/projects"
import { Contributions } from "@/components/sections/contributions"
import { TechStack } from "@/components/sections/tech-stack"
import { About } from "@/components/sections/about/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Navbar } from "@/components/navigation/navbar"

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <Navbar />
      <section id="home" className="w-full flex items-center justify-center">
        <Home />
      </section>
      <div className="container mx-auto px-4">
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

        <section id="contact" className="min-h-screen py-20 flex flex-col justify-center">
          <Contact />
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
