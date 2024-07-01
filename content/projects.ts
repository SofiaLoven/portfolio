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
      "Welcome to view our wedding webpage. We used this together with the invitations to communicate with the guests. I choose to use google forms to collect the wedding invitations. I apologize in advance because this website is in Swedish.",
    skills: ["HTML5", "SASS", "CSS", "JavaScript", "Iframe"],
    img: wedding,
    links: {
      github: "https://github.com/SofiaLoven/wedding",
      preview: "http://sofiaochmaxbrollop.se/",
    },
  },
  {
    id: uuidv4(),
    title: "This portfolio",
    description:
      "I made this portfolio during the summer 2024. I wanted to display my knowledge in a user friendly and nice looking website. I used Tailwind to design this to test it out.",
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
      "This was a examinations project during my education at Nackademin. We learned about react together with redux states. Since I love the show The Office I wanted to use that as the theme. It is supposed to work as a digital wallet were you can have five cards in total. Only one of them is active and the other four can be activated if you click on it.",
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
      "This was an object oriented assignment where we build a website to compare Star Wars characters. This was build during my first year of my education. There are a lot of things to improve, but I like to keep it as it is to se how much I have developed during this time.",
    skills: ["Axios", "HTML", "CSS", "SASS", "JavaScript"],
    img: starWars,
    links: {
      github: "https://github.com/SofiaLoven/Star-Wars-Trivia",
      preview: "https://sofialoven.github.io/Star-Wars-Trivia/",
    },
  },
];

export default Projects;
