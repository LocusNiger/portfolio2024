import { Calendar, Briefcase, Code, CheckCircle } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  period: string;
  projects: { name: string; description: string }[];
  technologies: string[];
  achievements: string[];
};

const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Ingeniería SCH SRL",
    period: "November 2022 - August 2024",
    projects: [
      {
        name: "Oficina Virtual",
        description: "Platform for online procedure management.",
      },
      {
        name: "Mesa de Entrada",
        description: "Document reception and distribution system.",
      },
      {
        name: "IoT Platform",
        description: "System for monitoring and managing IoT devices.",
      },
    ],
    technologies: ["React", "Redux", "JavaScript", "Tailwind CSS", "Vite"],
    achievements: [
      "Implemented responsive interfaces to optimize usability on mobile devices, enhancing accessibility for operators.",
      "Migrated the 'Mesa de Entrada' system from a command-based environment to an intuitive, minimalistic web platform, significantly improving user experience.",
      "Designed and developed reusable components in React, increasing development efficiency in both current and future projects.",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Self-employed",
    period: "2021 - Present",
    projects: [
      {
        name: "Landing Pages for Various Clients",
        description:
          "Custom landing pages to showcase products and services effectively.",
      },
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "SASS",
    ],
    achievements: [
      "Developed personalized, responsive landing pages to meet clients’ needs, enhancing their online presence.",
      "Designed aesthetically appealing and intuitive interfaces, providing a seamless user experience.",
      "Utilized reusable components and responsive design, reducing development time and improving site performance.",
    ],
  },
];

const TechIcon: React.FC<{ tech: string }> = ({ tech }) => {
  return <Code className="inline-block mr-2" size={18} />;
};

export default function ExperienceSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
        {experiences.map((exp, index) => (
          <div
            className="space-y-8 bg-black-200 mb-10 rounded-3xl border border-white/[0.1]"
            key={index}
          >
            <div className="p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                  <Briefcase className="mr-2" size={18} />
                  <span className="mr-4">{exp.company}</span>
                  <Calendar className="mr-2" size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Projects:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.projects.map((project, idx) => (
                    <li key={idx}>
                      <span className="font-medium">{project.name}:</span>{" "}
                      {project.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700"
                    >
                      <TechIcon tech={tech} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Achievements and Impact:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className="mr-2 text-green-500 flex-shrink-0"
                        size={18}
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
