"use client";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

// Link al resume para descargar
const resumePath = "/Resume-Ivan-Sanchez-Frontend.pdf";

// Definición del esquema de validación usando Zod
const formSchema = z.object({
  firstname: z.string().min(1, "Name is required."),
  lastname: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid Email."),
  message: z.string().min(30, "The message must be at least 30 characters."),
});

// Tipo inferido del esquema para TypeScript
type FormData = z.infer<typeof formSchema>;

export function Form() {
  // Hook useForm con validación de Zod
  const {
    register, // Función para registrar campos del formulario
    handleSubmit, // Manejador de envío del formulario
    formState: { errors }, // Estado de errores del formulario
    reset, // Agregamos reset de react-hook-form
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (data: FormData) => {
    console.log("TEST2");
    try {
      // Envío del email usando EmailJS
      await emailjs.send(
        "service_locusniger", // ID del servicio
        "template_hara2m8", // ID de la plantilla
        {
          // Datos a enviar
          first_name: data.firstname,
          last_name: data.lastname,
          email: data.email,
          message: data.message,
          date_time: new Date().toLocaleString(),
          location: window.location.href,
        },
        "mT-53lqh54E6u4NjI" // Public key de EmailJS
      );
      toast.success("Message sent successfully!", {
        duration: 4000, // Duración en ms
        position: "bottom-center", // Posición de la alerta
        style: {
          background: "#18181B",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
      // Resetear el formulario después de enviar exitosamente
      reset();
    } catch (error) {
      console.log("Detailed error:", error);
      toast.error(
        `Error sending the message: ${
          error instanceof Error ? error.message : "Unknown"
        }`,
        {
          duration: 4000,
          position: "bottom-center",
        }
      );
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      <div className="col-span-1 md:col-span-4 bg-gradient-to-br relative group/btn from-black-100 dark:from-black-100 dark:to-black-200 to-black-200 flex flex-col items-center rounded-3xl p-4 shadow-input border border-white/[0.1] hover:border-white/[0.3] transition-all duration-300">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 w-full">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                {...register("firstname")}
                placeholder="John"
                type="text"
              />
              {errors.firstname && (
                <span className="text-red-500 text-sm">
                  {errors.firstname.message}
                </span>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input {...register("lastname")} placeholder="Doe" type="text" />
              {errors.lastname && (
                <span className="text-red-500 text-sm">
                  {errors.lastname.message}
                </span>
              )}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              {...register("email")}
              placeholder="example@example.com"
              type="email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <textarea
              {...register("message")}
              className="w-full h-32 p-2 rounded-md border border-white/[0.1] bg-black-100 text-neutral-300"
              placeholder="Your message here..."
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </LabelInputContainer>

          <button
            className="relative group/btn bg-black-100 dark:bg-black-100 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send message &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
      <div className="col-span-1 md:col-span-3 flex flex-col gap-6 mt-4 md:mt-0">
        <p className="text-neutral-600 text-2xl md:text-base text-center dark:text-neutral-300">
          My links and resume are below.
        </p>

        <div className="flex flex-col mx-auto justify-center gap-6 w-full">
          <a href="https://github.com/locusniger" target="_blank">
            <button
              className=" relative group/btn border border-white/[0.1] hover:border-white/[0.3] transition-all duration-300 flex space-x-2 items-center justify-center px-4 w-full text-black rounded-lg h-10 font-medium shadow-input dark:bg-black-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/ivansanchez-frontend/"
            target="_blank"
          >
            <button
              className=" relative group/btn border border-white/[0.1] hover:border-white/[0.3] transition-all duration-300 flex space-x-2 items-center justify-center px-4 w-full text-black rounded-lg h-10 font-medium shadow-input dark:bg-black-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                LinkedIn
              </span>
              <BottomGradient />
            </button>
          </a>
          <a href={resumePath} download>
            <button
              className=" relative group/btn border border-white/[0.1] hover:border-white/[0.3] transition-all duration-300 flex space-x-2 items-center justify-center px-4 w-full text-black rounded-lg h-10 font-medium shadow-input dark:bg-black-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <IconDownload className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Download My Resume
              </span>
              <BottomGradient />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
