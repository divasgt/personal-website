"use client";

import Image from "next/image";
import Link from "next/link";
import { FiGlobe, FiGithub } from "react-icons/fi";

export default function Project({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  imageSrc,
}: {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  imageSrc: string;
}) {
  return (
    <Link
      href={liveLink}
      className="bg-neutral-500/10 hover:bg-neutral-500/15 transition-colors duration-100 border border-neutral-500/20 hover:border-neutral-500/40 rounded-md flex flex-col md:flex-row justify-between items-center gap-2"
    >
      <div className="px-5 py-4 space-y-3">
        <div className="flex justify-between items-center gap-2.5">
          <h2 className="text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h2>
          <div className="flex gap-2">
            <div className="relative group/globe">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-secondary/80 hover:text-foreground transition-colors duration-100"
                aria-label={`${title} live link`}
              >
                <FiGlobe size={16} />
              </a>
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-secondary bg-background border border-neutral-500/20 rounded px-1.5 py-0.5 opacity-0 group-hover/globe:opacity-100 transition-opacity duration-100">
                Live Link
              </span>
            </div>
            <div className="relative group/github">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-secondary/80 hover:text-foreground transition-colors duration-100"
                aria-label={`${title} github repo`}
              >
                <FiGithub size={16} />
              </a>
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-secondary bg-background border border-neutral-500/20 rounded px-1.5 py-0.5 opacity-0 group-hover/github:opacity-100 transition-opacity duration-100">
                GitHub Link
              </span>
            </div>
          </div>
        </div>
        <p className="text-secondary text-sm md:text-base">{description}</p>

        <div className="text-secondary text-xs md:text-sm font-light flex flex-wrap gap-2 select-none">
          {techStack.map((tech) => (
            <span className="rounded-md px-1.75 py-0.75 border border-neutral-500/30 dark:border-neutral-400/30">
              {/* hover:border-neutral-500/40 dark:hover:border-neutral-400/60 transition-colors duration-100 */}
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="w-auto md:w-60 shrink-0 self-stretch rounded-b-md md:rounded-r-md overflow-hidden">
        <Image
          src={imageSrc}
          alt={title + " Screenshot"}
          className="object-cover object-top h-full w-full"
          height={500}
          width={500}
          unoptimized
        />
      </div>
    </Link>
  );
}
