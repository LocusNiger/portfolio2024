"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import TailwindConnectButton from "./ui/TailwindConnectButton";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center relative xl:my-20 z-10">
        <div className="flex flex-col items-center justify-center">
          {/* SPOTLIGHT: Efecto de luz en los textos */}
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="-top-10 -left-full h-[80vh] w-[50vw]"
              fill="purple"
            />
            <Spotlight
              className="top-28 left-80 h-[80vh] v-[50vw]"
              fill="blue"
            />
          </div>

          {/* HeroHighlight component */}
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              Shaping Ideas Into <br />
              <Highlight className="text-white">
                Engaging Web Experiences
              </Highlight>
            </motion.h1>

            {/* Texto debajo del H1 */}
            <p className="text-center md:tracking-wider mb-4 text-small md:text-lg lg:text-2xl">
              Hi, I&apos;m Iván, a Frontend Developer based in{" "}
              <span className="text-blue-400 ">ARGENTINA</span>.
            </p>

            {/* Botón que dirije a mis proyectos */}
            {/* Props personalizadas para agregar text, icono y posición del mismo, función handleClick */}
            {/* y otras clases que pasemos por props */}
            <a href="#about">
              <TailwindConnectButton
                title="Show my work"
                icon={<FaLocationArrow className="text-sm" />}
                position="right"
              />
            </a>
          </HeroHighlight>
        </div>
      </div>
    </div>
  );
};

export default Hero;
