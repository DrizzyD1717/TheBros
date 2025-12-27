"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  picture: string[];
  description: string;
  stack: string[];
  id: number;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    picture: ["/Dariport1.png", "/Dariport2.png"],
    description:
      "Modern Portfolio website with animations for showcasing projects and skills.",
    stack: ["Next.js", "TypeScript"],
    id: 1,
  },
  {
    title: "Project Two",
    picture: ["/HarrisHak1.jpeg", "/HarrisHak2.jpeg"],
    description: "Short project description.",
    stack: ["React", "Tailwind"],
    id: 2,
  },
  {
    title: "Project Three",
    picture: ["/project-one-1.png", "/project-one-2.png"],
    description: "Short project description.",
    stack: ["HTML", "CSS", "JS"],
    id: 3,
  },
  {
    title: "Project Four",
    picture: ["/project-one-1.png", "/project-one-2.png"],
    description: "Short project description.",
    stack: ["Next.js", "API"],
    id: 4,
  },
];

export default function RecentProjects() {
  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-6">Recent Web Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: project.id * 0.05 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col h-screen"
          >
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <div className="flex justify-center mb-4 flex-wrap">
              <Image
                src={project.picture[0]}
                alt={project.title}
                width={600}
                height={200}
                className="rounded-lg w-auto max-h-[100%"
              ></Image>
            </div>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
