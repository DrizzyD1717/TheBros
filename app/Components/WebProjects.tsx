type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description: "Short project description.",
    stack: ["Next.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "Short project description.",
    stack: ["React", "Tailwind"],
  },
  {
    title: "Project Three",
    description: "Short project description.",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    title: "Project Four",
    description: "Short project description.",
    stack: ["Next.js", "API"],
  },
];

export default function RecentProjects() {
  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-6">Recent Web Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-textSecondary text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-background rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button className="mt-auto text-primary font-medium hover:underline">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
