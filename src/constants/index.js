import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  truenary,
  webify,
  java,
  csharp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Intership",
    company_name: "Webify Tech",
    icon: webify,
    iconBg: "#E6DEDD",
    date: "May 2022 - Oct 2022",
    points: [
      "Web development with java and spring boot framework",
      "Collaborating with other developers",
      "Implementing Restful apis and manage key feature like security and data access",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Associate",
    company_name: "Truenary Solution",
    icon: truenary,
    iconBg: "#383E56",
    date: "Nov 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    name: "Someone",
    designation: "CFO",
    company: "Company",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    name: "Someone",
    designation: "COO",
    company: "Company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    name: "Someone",
    designation: "CTO",
    company: "Company",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hotel CMS",
    description:
      "Web-based platform that allows hotels to search, book, and manage guest, booking, rooms and transactions. providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dvpbl8jew/image/upload/v1723539973/portfolio/hms/ors72p43atnjgaoakfjo.png",
    source_code_link: "https://github.com/rahul-431/HMS",
  },
  {
    name: "RealEstate",
    description:
      "Web based platform that allows users to search and view property listing and connect to the corresponding professionals, property like house, land, room, apartments and bunglows are listed",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dvpbl8jew/image/upload/v1723201651/portfolio/gjfcpeymzit6ifrdgwie.png",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
