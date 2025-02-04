import { Form } from "./ui/Form";
import { SiMinds } from "react-icons/si";
import { PiBrainThin } from "react-icons/pi";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:px-10 px-5 bg-gradient-to-b from-black-100 via-[75%] to-black-200"
    >
      {/* Título */}
      <div className="flex flex-col justify-center items-center gap-4 pb-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center">
          <SiMinds className="text-6xl text-yellow-400 transition-all duration-300 hover:text-yellow-500" />
          <p className="text-center text-white text-4xl md:text-5xl font-semibold">
            Got ideas? I&apos;ve got the{" "}
            <span className="text-[#f06529] text-4xl md:text-5xl font-bold">
              skills.
            </span>{" "}
            Let&apos;s team up.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center">
          <p className="text-white text-center text-3xl font-semibold">
            Tell me more about yourself and what you&apos;ve got in mind
          </p>
          <PiBrainThin className="text-5xl text-rose-400 hover:text-rose-500 transition-all duration-300" />
        </div>

        <h2 className="text-white text-5xl md:text-7xl font-medium py-16 text-left md:text-right">
          Contact
        </h2>
      </div>
      <Toaster />
      <Form />
    </section>
  );
};

export default Contact;
