import ContactLinks from "@/components/ContactLinks";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center pt-20 mx-5">
      <div className="w-full max-w-lg md:max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Contact
        </h1>
        <p className="text-secondary md:text-lg mb-6">
          I love meeting new people. Feel free to reach out {":)"}
        </p>
        <ContactLinks />
      </div>
    </div>
  );
}
