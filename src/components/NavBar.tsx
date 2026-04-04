"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
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
      className={`flex justify-center mx-2 py-5 sticky mt-4 top-0 z-100 bg-background`}
    >
      <nav className="flex justify-between gap-10 px-0.5 text-nowrap text-shadow-foreground sm:">
        <Link href={"/"} className={linkClassName("/")}>
          home
        </Link>
        <Link href={"/good-stuff"} className={linkClassName("/good-stuff")}>
          good stuff
        </Link>
        <Link href={"/contact"} className={linkClassName("/contact")}>
          contact
        </Link>
      </nav>
    </header>
  );
}
