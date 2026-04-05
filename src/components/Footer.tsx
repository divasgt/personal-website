import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="relative py-5 mt-10 text-center text-neutral-500 text-xs tracking-wide">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4">
        <p className="whitespace-nowrap">Made by Divas Verma.</p>
        <p className="whitespace-nowrap">
          Last updated: <time dateTime="2026-04-05">5 April 2026</time>
          {/* {new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
          })} */}
        </p>
      </div>
      <div className="mb-0.5 absolute right-4 sm:right-8 bottom-1/2 translate-y-1/2">
        <ThemeToggle />
      </div>
    </footer>
  );
}
