import eWallet from "@/public/images/Skärmbild 2024-06-26 114504.png";
import wedding from "@/public/images/wedding.png";
import { v4 as uuidv4 } from "uuid";
import { Project } from "../types";

const Projects: Project[] = [
  {
    id: uuidv4(),
    title: "The Office Wallet",
    description:
      "This was a examinations project during my education at Nackademin. We learned about react together with redux states. Since I love the show The Office I wanted to use that as the theme. It is supposed to work as a digital wallet were you can have five cards in total. Only one of them is active and the other four can be activated if you click on it.",
    skills: ["HTML5", "CSS", "JavaScript", "ReactJS", "Redux", "axios"],
    img: eWallet,
    links: {
      github: "https://github.com/SofiaLoven/e-wallet",
      preview: "https://sofialoven.github.io/e-wallet/",
    },
  },
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
];

export default Projects;
