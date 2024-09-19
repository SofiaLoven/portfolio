import eWallet from "@/public/images/eWallet.png";
import wedding from "@/public/images/wedding.png";
import portfolio from "@/public/images/portfolio.png";
import starWars from "@/public/images/StarWars.png";
import { v4 as uuidv4 } from "uuid";
import { Project } from "../types";

const Projects: Project[] = [
  {
    id: uuidv4(),
    title: "Our wedding webpage",
    description:
      "I made this website to complement our wedding invitations, adding extra details and updates for our guests. It includes a Google Form for easy RSVP collection. We hope you enjoy it.",
    skills: ["HTML5", "SASS", "CSS", "JavaScript", "Iframe"],
    img: wedding,
    links: {
      github: "https://github.com/SofiaLoven/wedding",
      preview: "https://serene-clafoutis-3f8325.netlify.app/",
    },
  },
  {
    id: uuidv4(),
    title: "This portfolio",
    description:
      "I created this responsive portfolio website during the summer of 2024 to showcase my work. It was a great opportunity to try out Tailwind CSS for styling and layout. I hope you enjoy exploring my projects and skills.",
    skills: ["HTML5", "TailwindCSS", "Javascript", "NextJs", "Typescript"],
    img: portfolio,
    links: {
      github: "https://github.com/SofiaLoven/portfolio",
      preview: "https://sofialoven.github.io/portfolio/",
    },
  },
  {
    id: uuidv4(),
    title: "The Office Wallet",
    description:
      "I created this digital wallet website during my first year of education as an assignment to learn Redux together with React. Inspired by my love for 'The Office', the site features an Office-themed design. I hope you enjoy it.",
    skills: ["HTML5", "CSS", "JavaScript", "ReactJS", "Redux", "Axios", "Vite"],
    img: eWallet,
    links: {
      github: "https://github.com/SofiaLoven/e-wallet",
      preview: "https://sofialoven.github.io/e-wallet/",
    },
  },
  {
    id: uuidv4(),
    title: "The Star Wars Trivia",
    description:
      "I created this website as an assignment during my education. It compares Star Wars characters fetched from swapi.dev api. While it has a lot of room for improvement, I like to keep it as a benchmark for my progress.",
    skills: ["Axios", "HTML", "CSS", "SASS", "JavaScript"],
    img: starWars,
    links: {
      github: "https://github.com/SofiaLoven/Star-Wars-Trivia",
      preview: "https://sofialoven.github.io/Star-Wars-Trivia/",
    },
  },
];

export default Projects;
