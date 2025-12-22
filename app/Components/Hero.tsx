import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:py-28 bg-background">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
          Professional Services Anytime
        </h1>
        <p className="text-textSecondary mb-6">
          Web development, UI/UX design, Photography, Branding & more. Fast,
          reliable, and professional.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
          <Link href="/Services">
            <button className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-600 transition">
              Hire a Service
            </button>
          </Link>
          <Link href="/Services">
            <button className="bg-secondary text-white px-6 py-3 rounded hover:bg-red-500 transition">
              Explore Services
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <Image
          width={10}
          height={10}
          src="/hero-image.png" // replace with your image
          alt="Hero Illustration"
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
