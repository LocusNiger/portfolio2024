import { FaCss3Alt, FaHtml5, FaReact, FaTrello } from "react-icons/fa";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import MockupOficina from "@/public/MockupOficina.png";
import MockupMesa from "@/public/MockupMesa1.png";
import MockupIoT from "@/public/MockupIoT.png";
import MockupISCH from "@/public/MockupISCH.png";
import MockupPuppina from "@/public/MockupPuppina.png";

export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
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

export const projects = [
  {
    name: "Oficina Virtual",
    description:
      "Platform for managing municipal online procedures, designed to streamline citizen services and enhance operational efficiency.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61dbfb" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#a5f3fc" },
    ],
    img: MockupOficina,
    softSkills: [
      "Effective collaboration with UX/UI teams and backend developers",
      "Problem-solving under tight deadlines",
      "Proactive management of complex requirements",
      "Strong communication",
      "Time management",
    ],
    achievements: [
      "Improved operator workflows and task efficiency by approximately 30% through the development of responsive and accessible mobile interfaces.",
      "Created and optimized reusable React components, accelerating development cycles by 20% and improving overall application performance.",
      "Redesigned interfaces across projects using modern UX/UI principles, collaborating with UX/UI designers and the Team Leader to enhance usability and boost user satisfaction by 40%.",
      "Collaborated closely with backend teams to integrate APIs seamlessly, ensuring robust communication between systems and enabling scalable and efficient solutions.",
      "Implemented advanced search functionalities, including multi-filter options and data exports, reducing operator task completion times and improving workflow efficiency.",
      "Refactored legacy codebases to adhere to clean code principles, resulting in improved maintainability, scalability, and enhanced performance.",
      "Introduced scalability improvements, ensuring the platform could handle an increasing number of users and transactions effectively.",
      "Designed and developed new functionalities such as advanced filtering options, real-time data synchronization, and role-based access controls, addressing complex user requirements.",
      "Earned consistent praise from stakeholders and operators for transforming legacy systems into intuitive, high-performing platforms, reducing user errors and improving satisfaction.",
    ],
  },
  {
    name: "Mesa de Entrada",
    description:
      "Web-based platform for managing municipal file processing, replacing the legacy command-line system with an intuitive and modern interface.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61dbfb" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#a5f3fc" },
    ],
    img: MockupMesa,
    softSkills: [
      "Independence and leadership in designing and developing the platform entirely on my own.",
      "Problem-solving in high-pressure scenarios.",
      "Time management and prioritization of tasks.",
      "Proactivity and self-learning to address complex challenges.",
      "Strong communication for aligning cross-functional teams.",
    ],
    achievements: [
      "Migrated the legacy command-line file processing system to a web-based platform, significantly enhancing usability and reducing operator errors by 50%.",
      "Designed and developed responsive, accessible, and intuitive user interfaces, improving operator efficiency and satisfaction.",
      "Collaborated closely with backend teams to integrate APIs seamlessly, ensuring reliable communication between systems and optimizing data workflows.",
      "Introduced advanced functionalities, including multi-criteria search, real-time filtering, and data export options, reducing task completion time by 40%.",
      "Refactored and optimized the codebase to align with clean code principles, improving maintainability, scalability, and overall system performance.",
      "Created reusable React components, reducing development time for future updates and accelerating new feature implementation by 25%.",
      "Enhanced system scalability, enabling the platform to handle a growing number of users and increasing data processing demands.",
      "Earned positive feedback from operators for significantly improving workflows, usability, and system reliability.",
    ],
  },
  {
    name: "IoT Monitoring Platform",
    description:
      "Web-based platform for real-time monitoring and control of city infrastructure systems, including traffic lights, power grids, and public lighting.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61dbfb" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#a5f3fc" },
      { name: "Redux Thunks", icon: SiRedux, color: "#764abc" },
    ],
    img: MockupIoT,
    softSkills: [
      "Autonomy and leadership in front-end development, taking ownership of the project’s design and implementation.",
      "Adaptability to learn and implement new technologies such as Redux Thunks for managing asynchronous operations.",
      "Problem-solving to address complex real-time synchronization challenges.",
      "Proactive collaboration with backend teams to ensure seamless data flow and robust system performance.",
      "Time management and prioritization to deliver a highly functional platform under tight deadlines.",
    ],
    achievements: [
      "Designed and implemented a responsive and intuitive front-end interface for monitoring and controlling city infrastructure systems in real time.",
      "Developed advanced data synchronization using Redux and Redux Thunks, enabling seamless real-time updates and interactions.",
      "Collaborated closely with backend teams to integrate APIs, ensuring accurate and efficient communication between systems.",
      "Improved scalability by designing a modular front-end architecture, allowing the platform to accommodate additional features and growing data demands effectively.",
      "Optimized performance by refactoring the codebase, adhering to clean code principles and improving maintainability and scalability.",
      "Created reusable and modular React components, accelerating the development process for new features by 30%.",
      "Implemented role-based access controls and secure data handling, ensuring privacy and adherence to industry standards.",
      "Applied UX/UI best practices to create an operator-friendly interface, improving system usability and reducing onboarding time for new users by 40%.",
      "Earned positive feedback from stakeholders for developing a platform capable of handling critical infrastructure data reliably and efficiently.",
    ],
  },
  {
    name: "ISCH Design",
    description:
      "Multilingual landing page developed to showcase the company's services and attract a global audience.",
    technologies: [
      { name: "Vite", icon: SiVite, color: "#bc34fe" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#a5f3fc" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
    ],
    img: MockupISCH,
    softSkills: [
      "Autonomy and initiative in designing and developing the project from scratch.",
      "Adaptability to implement multilingual functionality and manage content dynamically.",
      "Problem-solving to optimize performance and ensure fast loading times with Vite.",
      "Attention to detail in creating a visually appealing and responsive design.",
      "Effective communication to align with the company’s vision and branding requirements.",
    ],
    achievements: [
      "Developed a responsive, visually appealing, and fast-loading landing page using Vite and Tailwind CSS.",
      "Implemented a multilingual feature, enabling seamless content switching between languages to target a global audience.",
      "Optimized performance, achieving fast load times and smooth transitions by leveraging Vite's capabilities and clean coding practices.",
      "Collaborated closely with stakeholders to align the design and functionality with the company’s branding and marketing objectives.",
      "Developed reusable components and modular CSS for scalability and easy future updates.",
      "Enhanced SEO performance by implementing best practices, improving visibility and search rankings for the company's target audience.",
      "Received positive feedback from stakeholders for delivering a professional, user-friendly, and high-performing platform that exceeded expectations.",
    ],
  },
  {
    name: "Puppina Accesorios",
    description:
      "Landing page designed as the final project for a web development course, focused on creating an aesthetic and functional interface for a fictional accessories brand.",
    technologies: [
      { name: "HTML", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
      { name: "SASS", icon: SiSass, color: "#cf649a" },
    ],
    img: MockupPuppina,
    softSkills: [
      "Creativity and attention to detail in creating a visually appealing design.",
      "Adaptability to use SASS for modular and scalable CSS.",
      "Time management to deliver the project within strict deadlines.",
      "Problem-solving to ensure compatibility and responsiveness across devices.",
      "Commitment to excellence, achieving recognition in the 'Top 10' of the course.",
    ],
    achievements: [
      "Created a responsive and visually appealing landing page using HTML, CSS, and SASS.",
      "Achieved recognition in the 'Top 10' projects of the course, receiving the third-highest grade overall.",
      "Designed an intuitive layout to effectively showcase the brand's products and improve user navigation.",
      "Optimized code using SASS, ensuring modularity and easy scalability for future updates.",
      "Demonstrated effective use of typography and color theory to enhance the brand's identity and appeal.",
    ],
  },
];
