"use client";

import { projects } from "@/data";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

const Projects2 = () => {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const [showMore, setShowMore] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
        setShowMore(false);
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
    setShowMore(false);
  });

  return (
    <>
      <section id="projects" className="sm:px-10 px-5">
        <div className="flex flex-col py-16 px-4">
          <h2 className="text-white text-5xl md:text-8xl font-light pb-16">
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
                  className="h-[80vh] w-[60vw] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                >
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

                  <div>
                    <div className="flex justify-between items-start p-4">
                      <div className="">
                        <motion.h3
                          layoutId={`title-${active.name}-${id}`}
                          className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                        >
                          {active.name}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600 dark:text-neutral-400 text-base"
                        >
                          {active.description}
                        </motion.p>
                      </div>

                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#"
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                      >
                        Visit
                      </motion.a>
                    </div>
                    <div className="pt-4 relative px-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 ${
                          showMore ? "overflow-y-auto" : "overflow-hidden"
                        } [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]`}
                      >
                        {active.achievements.map((achievement, index) => (
                          <p key={index}>{achievement}</p>
                        ))}
                      </motion.div>
                      {!showMore && (
                        <button
                          onClick={() => setShowMore(true)}
                          className="text-blue-500 mt-2"
                        >
                          See more...
                        </button>
                      )}
                    </div>
                  </div>
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
