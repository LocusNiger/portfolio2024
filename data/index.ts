import { FaCss3Alt, FaHtml5, FaReact, FaTrello } from "react-icons/fa";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiRedux, SiTypescript, SiVite } from "react-icons/si";

export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "Experience", link: "#experience" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

// Data que va en el grid "About"
export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-1 ",
    imgClassName: "",
    titleClassName:
      "text-center text-3xl mt-2 md:mt-0 md:text-2xl md:text-end pb-5",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "text-center text-2xl md:justify-start mt-2 md:mt-0",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title:
      "Constantly learning and implementing the latest frontend technologies.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "I design and develop high-performance web applications with a focus on clean code and great user experience.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center w-full",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Your ideas, my code. Let’s create something great together.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName:
      "absolute right-0 bottom-0 md:w-96 w-72 opacity-50 md:opacity-80",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title:
      "Looking to collaborate on innovative projects? Let’s make it happen!",
    description: "",
    className: "md:col-span-2 md:row-span-2 py-4 md:py-0",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const experiences = [
  {
    role: "Frontend Developer",
    company: "Ingeniería SCH SRL",
    companyURL: "https://www.ingenieriasch.com.ar/es",
    period: "November 2022 - August 2024",
    projects: [
      {
        name: "Oficina Virtual",
        description: "Platform for online procedure management.",
      },
      {
        name: "Mesa de Entrada",
        description: "Document reception and distribution system.",
      },
      {
        name: "IoT Platform",
        description: "System for monitoring and managing IoT devices.",
      },
    ],
    technologies: [
      { name: "React", icon: FaReact, color: "#61dbfb" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "#F0DB4F" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#a5f3fc" },
      { name: "Vite", icon: SiVite, color: "#bc34fe" },
      { name: "Trello", icon: FaTrello, color: "#0079bf" },
    ],
    achievements: [
      "Implemented responsive interfaces to optimize usability on mobile devices, enhancing accessibility for operators.",
      "Migrated the 'Mesa de Entrada' system from a command-based environment to an intuitive, minimalistic web platform, significantly improving user experience.",
      "Designed, refactored, and developed reusable React components, improving performance and accelerating development across all projects.",
      "Introduced advanced search functionalities in 'Mesa de Entrada,' enabling complex filtering, data exports, and improved operator workflows.",
      "Led the front-end development of the IoT monitoring platform, implementing real-time data synchronization with Redux and Thunks to handle asynchronous operations efficiently.",
      "Enhanced user experience across all projects by redesigning interfaces with modern UX/UI principles, introducing multi-filter capabilities, and optimizing workflows for both operators and end users.",
      "Collaborated closely with backend developers to integrate APIs seamlessly, ensuring reliable and efficient communication between systems.",
      "Learned and applied new technologies, such as Redux Thunks, to address project-specific challenges, demonstrating adaptability and a commitment to innovation.",
      "Received positive feedback from operators for improving the functionality and aesthetics of legacy systems like 'Mesa de Entrada' and 'Oficina Virtual'.",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Self-employed",
    period: "2021 - Present",
    projects: [
      {
        name: "Landing Pages for Various Clients",
        description:
          "Custom landing pages to showcase products and services effectively.",
      },
    ],
    technologies: [
      { name: "React", icon: FaReact, color: "#61dbfb" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#a5f3fc" },
      { name: "Vite", icon: SiVite, color: "#bc34fe" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "#F0DB4F" },
      { name: "TypeScript", icon: SiTypescript, color: "#007acc" },
      { name: "HTML", icon: FaHtml5, color: "#e34c26" },
      { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
      { name: "SASS", icon: IoLogoSass, color: "#cd6799" },
    ],
    achievements: [
      "Developed personalized, responsive landing pages to meet clients’ needs, enhancing their online presence.",
      "Designed aesthetically appealing and intuitive interfaces, providing a seamless user experience.",
      "Utilized reusable components and responsive design, reducing development time and improving site performance.",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
