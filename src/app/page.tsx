import Project from "@/components/Project";
import { projects } from "@/data/projects";
import TechnicalSkills from "@/components/TechnicalSkills";
import Education from "@/components/Education";
import ContactLinks from "@/components/ContactLinks";
import { contactLinks, ContactLink } from "@/data/links";

function InlineContactLink({
  link,
  text,
}: {
  link: ContactLink;
  text?: string;
}) {
  const Icon = link.icon;
  return (
    <a
      href={link.href}
      target={link.type === "email" ? undefined : "_blank"}
      rel={link.type === "email" ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-1.5 ml-1 translate-y-0.5 font-medium text-secondary hover:text-foreground underline underline-offset-4 decoration-secondary/30 hover:decoration-foreground transition-all duration-100"
    >
      <Icon size={15} className="shrink-0 mt-0.5" />
      {text || link.label}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 sm:pt-30 mx-5">
      <div className="max-w-lg md:max-w-2xl">
        <section id="about">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Hi, I'm Divas Verma
          </h1>
          <p className="md:text-lg text-secondary">
            I'm a Full Stack web developer based in Delhi NCR, India. <br /> I
            enjoy building websites with focus on clarity, usability, and
            performance.
            <br /> <br />
            My goal is to use my technical skills to build projects with
            real-world impact that solve problems, improve lives, and reduce
            suffering.
            <br /> <br />
            Other than work, I like to gain knowledge, read great books, see
            latest tech stuff on X, watch youtube, do calisthenics, and play
            badminton.
            <br />
            <br />
            Open for freelance or full-time work, and always open to meet new
            people {":)"} <br />
            Reach out via <InlineContactLink
              link={contactLinks["Email"]}
            />, <InlineContactLink link={contactLinks["LinkedIn"]} />, or{" "}
            <InlineContactLink link={contactLinks["X"]} text="dms" />.
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
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Contact
          </h1>
          <p className="text-secondary md:text-lg mb-6">
            I love meeting new people. Feel free to reach out {":)"}
          </p>
          <ContactLinks />
        </section>
      </div>
    </div>
  );
}
