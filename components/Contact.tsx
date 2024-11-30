import { Form } from "./ui/Form";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SiMinds } from "react-icons/si";
import { PiBrainThin } from "react-icons/pi";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const words = [
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
  return (
    <section
      id="contact"
      className="py-16 sm:px-10 px-5 bg-gradient-to-b from-black-100 via-[75%] to-black-200"
    >
      {/* Título */}
      <div className="flex flex-col justify-center items-center gap-4 pb-12">
        <div className="flex gap-4 items-center justify-center">
          <SiMinds className="text-6xl text-yellow-400 transition-all duration-300 hover:text-yellow-500" />
          <TypewriterEffectSmooth
            words={words}
            cursorClassName="bg-blue-500 h-11 w-[3px]"
          />
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-white text-3xl font-semibold">
            Tell me more about yourself and what you&apos;ve got in mind
          </p>
          <PiBrainThin className="text-5xl text-rose-400 hover:text-rose-500 transition-all duration-300" />
        </div>
      </div>
      <Toaster />
      <Form />
    </section>
  );
};

export default Contact;
