import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import TailwindConnectButton from "./ui/TailwindConnectButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
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
        <Spotlight className="top-28 left-80 h-[80vh] v-[50vw]" fill="blue" />
      </div>

      {/* Grid and dots background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative xl:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Título con animación (fade in one by one) */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Shaping Ideas Into Engaging Web Experiences"
          />

          {/* Texto debajo del H2 */}
          <p className="text-center md:tracking-wider mb-4 text-small md:text-lg lg:text-2xl">
            Hi, I&apos;m Iván, a Frontend Developer based in{" "}
            <span className="text-blue-400 ">ARGENTINA</span>.
          </p>
          {/* Botón que dirije a mis proyectos */}
          {/* Props personalizadas para agregar text, icono y posición del mismo, función handleClick */}
          {/* y otras clases que pasemos por props */}
          <a href="#projects">
            <TailwindConnectButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
