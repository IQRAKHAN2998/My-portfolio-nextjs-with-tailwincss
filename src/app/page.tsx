// import Projects from "@/components/project/page"
// import About from "@/app/about/page";
import Home from "@/app/home/page";
import About from "@/app/about/page";
import Projects from "@/app/project/page";
import Contact from "@/app/contact/page";
import Wrapper from "@/components/wrapper/page";
// import Contact from "@/app/contact/page";

export default function Main() {
  return (
    <main className="mx-auto">

      {/* home */}
      <section>
        <Home />
      </section>


      <Wrapper>

        {/* project */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* {/* about me */}
        <section id="about">
          <About />
        </section>

      </Wrapper>

      {/* contact */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}