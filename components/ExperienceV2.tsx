"use client";
import { Calendar, Briefcase, CheckCircle } from "lucide-react";
import { experiences } from "@/data";
import { useState } from "react";

export default function ExperienceSection() {
  const [showAllAchievements, setShowAllAchievements] = useState(false);

  return (
    <section
      className="bg-gradient-to-b from-black via-black-100 via-[50%] to-black-100 sm:px-10 px-5"
      id="experience"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-white text-5xl md:text-7xl font-medium py-16 text-left md:text-right">
          Experience
        </h2>
        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div
              className="space-y-8 bg-black-200 rounded-3xl border border-white/[0.1] hover:border-white/[0.3] hover:shadow-xl transition-all duration-300"
              key={index}
            >
              <div className="p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-center md:text-start md:w-1/2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col mt-2 md:mt-0 md:flex-row md:items-center md:justify-end md:w-1/2">
                    <div className="flex items-center text-gray-300 underline md:no-underline md:hover:underline transition-all md:text-gray-600 mt-2 md:mt-0">
                      <Briefcase className="mr-2" size={18} />
                      <a
                        href={exp.companyURL}
                        target="_blank"
                        className="mr-4 hover:text-white transition-all duration-300"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-300 transition-all md:text-gray-600 mt-2 md:mt-0">
                      <Calendar className="mr-2" size={18} />
                      <span>{exp.period}</span>
                    </div>
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
                    {exp.technologies.map((tech, idx) => {
                      const IconComponent = tech.icon;
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700"
                        >
                          <IconComponent
                            className="mr-2"
                            size={18}
                            color={tech.color}
                          />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Achievements and Impact:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements
                      .slice(
                        0,
                        showAllAchievements ? exp.achievements.length : 3
                      )
                      .map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="mr-2 text-green-500 flex-shrink-0"
                            size={18}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                  </ul>
                  {exp.achievements.length > 3 && !showAllAchievements && (
                    <button
                      onClick={() => setShowAllAchievements(true)}
                      className="mt-2 text-blue-500 hover:underline"
                    >
                      See more
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
