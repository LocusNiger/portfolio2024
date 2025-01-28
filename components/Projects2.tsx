"use client";

import { projects } from "@/data";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CheckCircle } from "lucide-react";

const Projects2 = () => {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
        setShowAchievements(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => {
    setActive(null);
    setShowAchievements(false);
  });

  return (
    <>
      <section id="projects" className="sm:px-10 px-5">
        <div className="flex flex-col py-16 px-4">
          <h2 className="text-white text-5xl md:text-7xl font-medium py-16 text-left md:text-right">
            Projects
          </h2>
          <div
            className={`grid grid-cols-2 grid-rows-6 gap-3 ${
              active ? "blur-sm transition duration-300" : ""
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`relative cursor-pointer ${
                  index === 0
                    ? "row-span-2 md:h-96"
                    : index === 1
                    ? "row-span-3 md:h-[576px]"
                    : index === 2
                    ? "row-span-2 row-start-3 md:h-96"
                    : index === 3
                    ? "row-span-3 col-start-2 row-start-4 md:h-[576px]"
                    : "row-span-2 row-start-5 md:h-96"
                }`}
                onClick={() => setActive(project)}
              >
                <Image
                  src={project.img}
                  alt={`Mockup ${project.name}`}
                  layout="fill"
                  className="object-cover rounded-lg hover:opacity-45 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0 flex items-center justify-center z-[100]">
                <motion.div
                  layoutId={`card-${active.name}-${id}`}
                  ref={ref}
                  className="h-[90vh] w-[60vw] flex flex-col bg-black-100 sm:rounded-3xl overflow-hidden"
                >
                  {!showAchievements ? (
                    <>
                      <motion.div layoutId={`image-${active.name}-${id}`}>
                        <Image
                          priority
                          width={800}
                          height={400}
                          src={active.img}
                          alt={active.name}
                          className="w-full h-60 object-cover"
                        />
                      </motion.div>

                      <div className="p-6 flex flex-col gap-2 h-full">
                        <h3 className="font-medium text-neutral-700 dark:text-neutral-200 text-lg mb-2">
                          {active.name}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                          {active.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {active.technologies.map((tech, idx) => {
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
                        <div>
                          <button
                            className="text-gray-300 underline font-semibold pt-4 "
                            onClick={() => setShowAchievements(true)}
                          >
                            See Achievements
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-6 flex flex-col gap-6 h-full">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-neutral-700 dark:text-neutral-200 text-lg mb-2">
                          Achievements and Impact
                        </h3>
                        <ul className="space-y-1">
                          {active.achievements.map((achievement, idx) => (
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
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-neutral-700 dark:text-neutral-200 text-lg mb-2">
                          Soft skills
                        </h3>
                        <ul className="space-y-1">
                          {active.softSkills.map((skill, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle
                                className="mr-2 text-green-500 flex-shrink-0"
                                size={18}
                              />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        className="mt-2 text-blue-500 hover:underline"
                        onClick={() => setShowAchievements(false)}
                      >
                        Back
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default Projects2;
