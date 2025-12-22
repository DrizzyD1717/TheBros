import RecentProjects from "@/app/Components/WebProjects";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <main className="bg-background text-textPrimary min-h-screen px-6 py-16 md:py-28">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Web Development
        </h1>
        <p className="text-textSecondary">
          We design and build fast, responsive, and scalable websites that help
          businesses grow online.
        </p>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4">What We Do</h2>
        <p className="text-textSecondary mb-6">
          Our web development service focuses on creating modern,
          high-performance websites tailored to your business goals. Whether you
          need a landing page, business website, or a full web application, we
          deliver clean, maintainable, and scalable solutions.
        </p>

        <ul className="list-disc pl-6 text-textSecondary space-y-2">
          <li>Responsive websites for all devices</li>
          <li>Modern frontend development</li>
          <li>Performance and SEO optimization</li>
          <li>Secure and scalable architecture</li>
        </ul>
      </section>

      {/* Technologies */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4">Technologies We Use</h2>
        <p className="text-textSecondary mb-6">
          We use modern, industry-standard tools to ensure your website is fast,
          reliable, and easy to maintain.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Git",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-card p-4 rounded-lg text-center shadow"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Planning",
              desc: "Understanding your goals and requirements.",
            },
            {
              step: "02",
              title: "Design",
              desc: "Creating clean, user-friendly layouts.",
            },
            {
              step: "03",
              title: "Development",
              desc: "Building fast, responsive, and scalable code.",
            },
            {
              step: "04",
              title: "Launch",
              desc: "Testing, deployment, and post-launch support.",
            },
          ].map((item) => (
            <div key={item.step} className="bg-card p-6 rounded-lg shadow">
              <span className="text-primary font-bold">{item.step}</span>
              <h3 className="font-semibold mt-2 mb-1">{item.title}</h3>
              <p className="text-textSecondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <RecentProjects></RecentProjects>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-textSecondary mb-6">
          Let&apos;s discuss your idea and turn it into a powerful web
          experience.
        </p>
        <Link href="/contact">
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-600 transition">
            Get in Touch
          </button>
        </Link>
      </section>
    </main>
  );
}
