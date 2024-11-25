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
    titleClassName: "text-end pb-5",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
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
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title:
      "Looking to collaborate on innovative projects? Let’s make it happen!",
    description: "",
    className: "md:col-span-2 md:row-span-2",
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
    technologies: ["React", "Redux", "JavaScript", "Tailwind CSS", "Vite"],
    achievements: [
      "Implemented responsive interfaces to optimize usability on mobile devices, enhancing accessibility for operators.",
      "Migrated the 'Mesa de Entrada' system from a command-based environment to an intuitive, minimalistic web platform, significantly improving user experience.",
      "Designed and developed reusable components in React, increasing development efficiency in both current and future projects.",
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
      "React",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "SASS",
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
