import Project from "@/components/Project";
import { projects } from "@/data/projects";
import TechnicalSkills from "@/components/TechnicalSkills";
import Education from "@/components/Education";
import ContactLinks from "@/components/ContactLinks";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 mx-5">
      <div className="max-w-lg md:max-w-2xl">
        <section id="about">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Hi, I'm Divas Verma
          </h1>
          <p className="md:text-lg text-secondary">
            I'm a full-stack web developer based in Delhi NCR, India. <br /> I
            enjoy building clean, minimal web interfaces that actually feel good
            to use.
            <br /> I recently graduated with a bachelors degree in computer
            science from MAIT, Delhi in May 2025.
            <br /> <br />
            My goal is to use my technical skills to build projects which have
            real world impact in solving problems, making lives better and
            reduce suffering from this world.
          </p>
        </section>

        <div className="my-40" />

        <section id="projects">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            Projects
          </h1>

          <div className="flex flex-col gap-10">
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </section>

        <div className="my-40" />

        <section id="technical-skills">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            Technical Skills
          </h1>
          <TechnicalSkills />
        </section>

        <div className="my-40" />

        <section id="education" className="mb-20">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            Education
          </h1>
          <Education />
        </section>

        <div className="my-40" />

        <section id="contact" className="mb-20">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
            Contact
          </h1>
          <p className="text-secondary md:text-lg mb-12">
            I love meeting new people. Feel free to reach out {":)"}
          </p>
          <ContactLinks />
        </section>
      </div>
    </div>
  );
}
