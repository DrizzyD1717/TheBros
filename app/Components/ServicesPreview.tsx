import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "Web Development",
      href: "/services/web-development",
      desc: "Build responsive and modern websites.",
    },
    {
      title: "UI/UX Design",
      href: "/services/ui-ux-design",
      desc: "Design intuitive user interfaces.",
    },
    {
      title: "Photography",
      href: "/services/photography",
      desc: "Professional photos for your brand.",
    },
    {
      title: "Brand Design",
      href: "/services/brand-design",
      desc: "Craft a unique brand identity.",
    },
  ];

  return (
    <section id="services" className="px-6 py-16 md:py-20 bg-background">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-textSecondary mb-4">{service.desc}</p>
            <Link href={service.href}>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
