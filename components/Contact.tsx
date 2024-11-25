import { Form } from "./ui/Form";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

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
  const words2 = [
    {
      text: "Tell me more about yourself and what you've got in mind.",
      className: "text-white text-3xl font-semibold",
    },
  ];
  return (
    <section
      id="contact"
      className="py-16 sm:px-10 px-5 bg-gradient-to-b from-black-100 via-[75%] to-black-200"
    >
      {/* Título */}
      <div className="flex flex-col justify-center items-center gap-4 pb-12">
        <TypewriterEffectSmooth
          words={words}
          cursorClassName="bg-blue-500 h-11 w-[3px]"
        />
        <TypewriterEffectSmooth
          words={words2}
          cursorClassName="bg-blue-500 h-8 w-[2px]"
        />
      </div>
      <Form />
    </section>
  );
};

export default Contact;
