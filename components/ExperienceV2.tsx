import { Calendar, Briefcase, Code, CheckCircle } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { experiences } from "@/data";

const words = [
  {
    text: "Experience",
    className: "text-blue-500 text-4xl font-bold",
  },
];

const TechIcon: React.FC = () => {
  return <Code className="inline-block mr-2" size={18} />;
};

export default function ExperienceSection() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-16">
          <TypewriterEffectSmooth
            words={words}
            cursorClassName="bg-blue-500 h-11 w-[3px]"
          />
        </div>
        {experiences.map((exp, index) => (
          <div
            className="space-y-8 bg-black-200 mb-10 rounded-3xl border border-white/[0.1] hover:border-white/[0.3] hover:shadow-xl transition-all duration-300"
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
                      <TechIcon />
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
