export default function Footer() {
  return (
    <footer className="py-5 mt-10 text-center text-neutral-500 text-xs tracking-wide whitespace-pre-wrap">
      <p>
        Made with <span className="">{"<3"}</span> by Divas Verma.{"      "}Last
        updated:{" "}
        {new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    </footer>
  );
}
