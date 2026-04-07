"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

export default function Header() {
  const pathName = usePathname();
  /*
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  */

  const linkClassName = (path: string) =>
    `${path === pathName ? "text-foreground font-medium" : "text-tertiary"} hover:text-foreground`;

  return (
    <header className="sticky top-0 z-50 mx-2 sm:mx-6">
      <div
        className={`bg-background flex justify-center py-3.5 mx-auto max-w-lg md:max-w-2xl w-full`}
      >
        <nav className="space-x-5 sm:space-x-10 px-0.5 text-nowrap">
          <Link href={"/"} className={linkClassName("/")}>
            home
          </Link>
          <Link href={"/about"} className={linkClassName("/about")}>
            about
          </Link>
          <Link
            href={"/good-stuff"}
            className={
              pathName === "/good-stuff"
                ? "text-orange-400 font-medium"
                : "text-orange-400/70 hover:text-orange-400"
            }
          >
            good stuff
          </Link>
          <Link href={"/contact"} className={linkClassName("/contact")}>
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
