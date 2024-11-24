import { Form } from "./ui/Form";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Contact = () => {
  const words = [
    {
      text: "Contact",
      className: "text-blue-500 text-4xl font-bold",
    },
  ];
  return (
    <section id="contact">
      <div className="flex justify-center items-center py-16">
        <TypewriterEffectSmooth
          words={words}
          cursorClassName="bg-blue-500 h-11 w-[3px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
