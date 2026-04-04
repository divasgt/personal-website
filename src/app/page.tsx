import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 mx-5">
      <div className="max-w-lg md:max-w-2xl">
        <section id="about">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Divas Verma
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
            <br /> <br />
            In my other time I like to gain world-knowledge, self-knowledge,
            philosophy through books and videos, watch youtube, go running, do
            calisthenics, play badminton.
          </p>
        </section>

        <div className="my-40" />

        <section id="projects">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            Projects
          </h1>

          <div className="border-2 border-neutral-500/20 hover:border-neutral-500/40 rounded-md flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="px-5 py-4 space-y-3">
              <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                NextWatch
              </h2>
              <p className="text-secondary">
                One-Stop website for Cinema Enthusiasts, featuring AI-powered
                chat and recommendations.
              </p>

              <div className="text-secondary text-sm font-light flex flex-wrap gap-2 select-none">
                <span className="border border-neutral-300/20 rounded-md px-1.75 py-0.75">
                  Next.js
                </span>
                <span className="border border-neutral-300/20 rounded-md px-1.75 py-0.75">
                  React.js
                </span>
                <span className="border border-neutral-300/20 rounded-md px-1.75 py-0.75">
                  TypeScript
                </span>
                <span className="border border-neutral-300/20 rounded-md px-1.75 py-0.75">
                  Tailwind CSS
                </span>
                <span className="border border-neutral-300/20 rounded-md px-1.75 py-0.75">
                  Supabase
                </span>
                <span className="border border-neutral-300/20 rounded-md px-1.75 py-0.75">
                  TMDB API
                </span>
                <span className="border border-neutral-300/20 rounded-md px-1.75 py-0.75">
                  Google Gemini API
                </span>
              </div>
            </div>

            <div className="sm:w-60 w-auto shrink-0 self-stretch rounded-r-md overflow-hidden">
              <Image
                src="/NextWatch Screenshot.png"
                alt="NextWatch Screenshot"
                className="object-cover object-top h-full w-full"
                height={500}
                width={500}
                unoptimized
              />
            </div>
          </div>
        </section>

        <div className="my-40" />

        <section id="technical-skills">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Technical Skills
          </h1>
          <br />
          <p className="md:text-lg font-light text-secondary"></p>
        </section>

        <div className="my-40" />

        <section id="education" className="mb-20">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Education
          </h1>
          <br />
        </section>
      </div>
    </div>
  );
}
