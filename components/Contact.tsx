"use client";

import { useEffect, useState } from "react";
import { Form } from "./ui/Form";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SiMinds } from "react-icons/si";
import { PiBrainThin } from "react-icons/pi";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  // Si el usuario está en desktop/tablet se utilizan estas palabras para el typewriterEffect
  const wordsDesktop = [
    {
      text: "Got ideas?",
      className: "text-white text-5xl font-bold",
    },
    {
      text: "I've got the",
      className: "text-white text-5xl font-bold",
    },
    {
      text: "skills.",
      className: "text-[#f06529] text-5xl font-bold",
    },
    {
      text: "Let's team up.",
      className: "text-white text-5xl font-bold",
    },
  ];

  // Si el usuario está en mobile se usa este (el componente daba error con muchas palabras)
  const wordsMobile = [
    {
      text: "Get in touch",
      className: "text-white text-5xl font-bold",
    },
  ];

  const [widthPantalla, setWidthPantalla] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidthPantalla(window.innerWidth);
    };

    handleResize(); // Establece el ancho inicial

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-16 sm:px-10 px-5 bg-gradient-to-b from-black-100 via-[75%] to-black-200"
    >
      {/* Título */}
      <div className="flex flex-col justify-center items-center gap-4 pb-12">
        <div className="flex gap-4 items-center justify-center">
          {widthPantalla >= 640 && (
            <SiMinds className="text-6xl text-yellow-400 transition-all duration-300 hover:text-yellow-500" />
          )}
          <TypewriterEffectSmooth
            words={widthPantalla < 640 ? wordsMobile : wordsDesktop}
            cursorClassName="bg-blue-500 h-11 w-[3px]"
          />
        </div>
        {widthPantalla >= 640 && (
          <div className="flex gap-4 items-center">
            <p className="text-white text-3xl font-semibold">
              Tell me more about yourself and what you&apos;ve got in mind
            </p>
            <PiBrainThin className="text-5xl text-rose-400 hover:text-rose-500 transition-all duration-300" />
          </div>
        )}
      </div>
      <Toaster />
      <Form />
    </section>
  );
};

export default Contact;
