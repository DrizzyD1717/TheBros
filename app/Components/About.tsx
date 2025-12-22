import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6 py-16 md:py-20 bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center w-full">
          <Image
            width={400}
            height={400}
            src="/illustration.png" // replace with your image
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-textSecondary mb-4">
            We connect you with top professionals across web development,
            design, photography, and branding. Fast, reliable, and transparent.
          </p>
          <p className="text-textSecondary">
            Our goal is to make getting services easy, affordable, and
            professional — all in one platform. We prioritize quality and
            customer satisfaction in every project.
          </p>
        </div>
      </div>
    </section>
  );
}
