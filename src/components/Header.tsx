"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathName = usePathname();
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

  const linkClassName = (path: string) =>
    `${path === pathName ? "text-foreground font-medium" : "text-neutral-500"} hover:text-foreground`;

  return (
    <header
      className={`flex justify-center mx-2 sm:mx-6 py-4 sticky top-0 z-100 bg-background ${scrolled ? "border-b border-neutral-500/30" : "border-b border-transparent"}`}
    >
      <nav className="space-x-10 px-0.5 text-nowrap">
        <Link href={"/"} className={linkClassName("/")}>
          home
        </Link>
        <Link href={"/about"} className={linkClassName("/about")}>
          about
        </Link>
        <Link
          href={"/good-stuff"}
          className={linkClassName("/good-stuff") + "text-orange-400"}
        >
          good stuff
        </Link>
        <Link href={"/contact"} className={linkClassName("/contact")}>
          contact
        </Link>
      </nav>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <ThemeToggle />
      </div>
    </header>
  );
}
