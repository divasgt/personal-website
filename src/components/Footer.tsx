export default function Footer() {
  return (
    <footer className="py-5 mt-10 text-center text-neutral-500 text-xs tracking-wide">
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
    </footer>
  );
}
