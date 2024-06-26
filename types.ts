import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  img: StaticImageData;
  links: {
    github: string;
    preview: string;
  };
}
