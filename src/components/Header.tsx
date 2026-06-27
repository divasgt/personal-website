"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the section top is above half the screen height
        if (rect.top <= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      // Special case: near top (home)
      // if (window.scrollY < 100) {
      //   currentSection = "";
      // }

      // Special case: hit the bottom of the page
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight - 50
      ) {
        if (sections.length > 0) {
          currentSection = sections[sections.length - 1].id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initially to set correct state
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const linkClassName = (path: string) =>
  //   `${path === pathName ? "text-foreground font-medium" : "text-tertiary"} hover:text-foreground`;

  const homeSectionClassName = (href: string) => {
    let isActive = false; // to apply active style or not

    const id = href.replace("/#", "");

    if (href.startsWith("/#")) {
      isActive = activeSection === id;
    } else if (href === "/") {
      isActive = true;
    }

    return `${
      isActive ? "text-foreground font-medium" : "text-tertiary"
    } hover:text-foreground transition-colors`;
  };

  return (
    <header className="sticky top-0 z-50 mx-2 sm:mx-6">
      <div className="bg-background flex justify-center py-3.5 mx-auto max-w-lg md:max-w-2xl w-full">
        <nav className="space-x-5 sm:space-x-10 text-sm sm:text-base px-0.5 text-nowrap">
          <Link href={"/#about"} className={homeSectionClassName("/#about")}>
            About
          </Link>
          <Link
            href={"/#projects"}
            className={homeSectionClassName("/#projects")}
          >
            Projects
          </Link>
          <Link href={"/#skills"} className={homeSectionClassName("/#skills")}>
            Skills
          </Link>
          <Link
            href={"/#education"}
            className={homeSectionClassName("/#education")}
          >
            Education
          </Link>
          {/* <Link
            href={"/good-stuff"}
            className={
              pathName === "/good-stuff"
                ? "text-orange-400 font-medium"
                : "text-orange-400/70 hover:text-orange-400"
            }
          >
            good stuff
          </Link> */}
          <Link
            href={"/#contact"}
            className={homeSectionClassName("/#contact")}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
