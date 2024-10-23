"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import TailwindConnectButton from "./TailwindConnectButton";
import { IoCopyOutline, IoLogoSass } from "react-icons/io5";
import { FaBootstrap, FaGithub, FaReact, FaTrello } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiRedux,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaGit, FaHtml5 } from "react-icons/fa";
import { Highlight } from "./HeroHighlight";

/* Este componente retorna 2 componentes: el grid y el elemento del grid */

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  titleClassName,
  imgClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  // Función para copiar la dirección de mail
  const handleCopy = () => {
    navigator.clipboard.writeText("sanchezivan.798@gmail.com");
    setCopied(true);
  };

  const handleTitle = (id: number, title: string): React.ReactNode => {
    switch (id) {
      case 3:
        return (
          <>
            Constantly learning and implementing{" "}
            <Highlight className="text-white">
              the latest frontend technologies.
            </Highlight>
          </>
        );
      case 4:
        return (
          <>
            I design and develop high-performance web applications with a focus
            on{" "}
            <Highlight className="text-white">
              clean code and great user experience
            </Highlight>
          </>
        );
      default:
        return title;
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden rounded-3xl relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {/* Imagen que se usa de fondo */}
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>

        {/* La card n°6 tiene el gradiente de fondo */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold " /> */}
          </BackgroundGradientAnimation>
        )}

        {/* Descripción + título de cada card */}
        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 lg:p-10 ${
              id === 1 && "h-full bg-grid-white/[0.02]"
            } `
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
            {description}
          </div>
          <div
            className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ${titleClassName}`}
          >
            {handleTitle(id ?? 0, String(title ?? ""))}
          </div>

          {/* Card n°1: my tech stack */}
          {id === 1 && (
            <>
              <div className="flex gap-1 lg:gap-5 w-full items-center justify-between">
                {/* 1ERA COL DE ICONOS */}
                <div className="flex flex-col gap-3 lg:gap-8">
                  {[
                    <FaReact
                      className="text-7xl"
                      color="#61dbfb"
                      key="React-icon"
                    />,
                    <IoLogoJavascript
                      className="text-7xl"
                      color="#F0DB4F"
                      key="JavaScript-icon"
                    />,
                    <RiTailwindCssFill
                      className="text-7xl"
                      color="#a5f3fc"
                      key="Tailwind-icon"
                    />,
                  ].map((item) => item)}
                </div>
                {/* 2DA COL DE ICONOS */}
                <div className="flex flex-col gap-3 lg:gap-8">
                  {[
                    <SiNextdotjs
                      className="text-7xl"
                      color="#ffffff"
                      key="NextJs-icon"
                    />,
                    <SiTypescript
                      className="text-7xl"
                      color="#007acc"
                      key="TypeScript-icon"
                    />,
                    <SiRedux
                      className="text-7xl"
                      color="#764abc"
                      key="Redux-icon"
                    />,
                  ].map((item) => item)}
                </div>
                {/* 3RA COL DE ICONOS */}
                <div className="flex flex-col gap-3 lg:gap-8">
                  {[
                    <FaHtml5
                      className="text-7xl"
                      color="#e34c26"
                      key="HTML-icon"
                    />,
                    <FaCss3Alt
                      className="text-7xl"
                      color="#264de4"
                      key="CSS-icon"
                    />,
                    <FaGit
                      className="text-7xl"
                      color="#f14e32"
                      key="Git-icon"
                    />,
                  ].map((item) => item)}
                </div>
                {/* 4TA COL DE ICONOS */}
                <div className="flex flex-col gap-3 lg:gap-8">
                  {[
                    <IoLogoSass
                      className="text-7xl"
                      color="#cd6799"
                      key="SASS-icon"
                    />,
                    <FaBootstrap
                      className="text-7xl"
                      color="#563d7c"
                      key="Bootstrap-icon"
                    />,
                    <FaTrello
                      className="text-7xl"
                      color="#0079bf"
                      key="Trello-icon"
                    />,
                  ].map((item) => item)}
                </div>
                {/* 5TA COL DE ICONOS */}
                <div className="flex flex-col gap-3 lg:gap-8">
                  {[
                    <FaGithub
                      className="text-7xl"
                      color="#fff"
                      key="GitHub-icon"
                    />,
                    <SiVisualstudiocode
                      className="text-7xl"
                      color="#0078d7"
                      key="VSC-icon"
                    />,
                    <SiVite
                      className="text-7xl"
                      color="#bc34fe"
                      key="Vite-icon"
                    />,
                  ].map((item) => item)}
                </div>
              </div>
            </>
          )}

          {/* En la card n°2 se muestra el globo */}
          {id === 2 && <GlobeDemo />}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 bottom`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              {/* Botón para copiar la dirección de email */}
              <TailwindConnectButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="`bg-[#161a31]`"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>

        {/* Card n°5: la más grande con img de fondo ---> MODIFICAR */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {/* SpareImg si es la card n°5 */}
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};
