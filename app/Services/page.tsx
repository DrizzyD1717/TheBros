import Link from "next/link";

type Service = {
  title: string;
  href: string;
  desc: string;
  icon?: string; // optional placeholder for icons
};

const services: Service[] = [
  {
    title: "Web Development",
    href: "/Services/web-development",
    desc: "Build responsive and modern websites for your business.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    href: "/Services/ui-ux-design",
    desc: "Create intuitive and engaging interfaces for web and mobile.",
    icon: "🎨",
  },
  {
    title: "Photography",
    href: "/Services/photography",
    desc: "Professional photography to showcase your brand effectively.",
    icon: "📸",
  },
  {
    title: "Brand Design",
    href: "/Services/brand-design",
    desc: "Develop a strong visual identity for your business.",
    icon: "🛠️",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-textPrimary min-h-screen px-6 py-16 md:py-20">
      {/* Page Hero */}
      <section className="text-center mb-16 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-textSecondary max-w-2xl mx-auto">
          At ServiceHub, we offer a wide range of professional services to help
          your business grow and succeed. From creating stunning websites to
          capturing the perfect photo, we bring creativity and expertise to
          every project.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-textSecondary mb-4">{service.desc}</p>
            <Link href={service.href}>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-auto">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center mb-16 px-4 md:px-0">
        <h3 className="text-3xl font-bold text-primary mb-4">Why Choose Us?</h3>
        <p className="text-textSecondary max-w-3xl mx-auto mb-8">
          We combine creativity, experience, and a results-driven approach to
          deliver high-quality services that match your business goals. Our team
          is committed to professionalism, transparency, and customer
          satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="font-semibold mb-2">Expert Team</h4>
            <p className="text-textSecondary">
              Professionals with experience across design, development, and
              media.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="font-semibold mb-2">Fast & Reliable</h4>
            <p className="text-textSecondary">
              Timely delivery without compromising quality.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="font-semibold mb-2">Creative Solutions</h4>
            <p className="text-textSecondary">
              Tailored services that align with your brand and goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h3 className="text-3xl font-bold text-primary mb-4">
          Ready to Start?
        </h3>
        <p className="text-textSecondary mb-6">
          Contact us today to discuss your project and get a free quote!
        </p>
        <Link href="/contact">
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-600 transition">
            Get in Touch
          </button>
        </Link>
      </section>
    </div>
  );
}
