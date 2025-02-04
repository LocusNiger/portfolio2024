"use client";
import { FaLocationArrow } from "react-icons/fa6";
import TailwindConnectButton from "./ui/TailwindConnectButton";
import { HeroHighlight } from "./ui/HeroHighlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex justify-center items-center relative xl:my-20 z-10">
        <div className="flex flex-col items-center justify-center">
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
              className="text-4xl px-4 md:text-6xl font-bold text-neutral-700 dark:text-white max-w-7xl leading-relaxed lg:leading-snug text-center mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
            >
              Shaping Ideas Into <br />
              Engaging <span className="text-violet-400">Web Experiences</span>
            </motion.h1>

            {/* Texto debajo del H1 */}
            <p className="text-center md:tracking-wider mb-4 text-lg lg:text-2xl">
              Hi, I&apos;m Iván, a Frontend Developer based in{" "}
              <span className="text-blue-400 ">ARGENTINA</span>.
            </p>

            {/* Botón que dirije a mi experiencia */}
            {/* Props personalizadas para agregar text, icono y posición del mismo, función handleClick */}
            {/* y otras clases que pasemos por props */}
            <a href="#experience">
              <TailwindConnectButton
                title="Show my experience"
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
