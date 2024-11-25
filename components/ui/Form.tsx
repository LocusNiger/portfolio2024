"use client";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";

const resumePath = "/Resume-Ivan-Sanchez-Frontend.pdf";

export function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="grid grid-cols-7 grid-rows-1 gap-4">
      <div className="col-span-4 bg-gradient-to-br relative group/btn from-black-100 dark:from-black-100 dark:to-black-200 to-black-200 flex flex-col items-center rounded-3xl p-4 shadow-input border border-white/[0.1] hover:border-white/[0.3] transition-all duration-300">
        <form onSubmit={handleSubmit} className="p-6 w-full">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="John" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Doe" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="example@example.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Input
              type="textarea"
              id="message"
              placeholder="Your message here..."
            />
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
      <div className="col-span-3 col-start-5 flex flex-col gap-6">
        <p className="text-neutral-600 text-center dark:text-neutral-300">
          My links and resume are below.
        </p>

        <div className="flex flex-col mx-auto justify-center gap-6 w-[70%]">
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
