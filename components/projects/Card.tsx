import { Project } from "@/types";
import Arrow from "@/public/images/Arrow.svg";
import Image from "next/image";
import Link from "next/link";

const Card = ({ info }: { info: Project }) => {
  const { title, description, img, skills, links, id } = info;
  return (
    <li
      key={id}
      className="flex flex-col items-center md:items-start bg-white rounded shadow-xl md:p-8 relative md:w-auto"
    >
      <Image
        alt={`Picture of the project ${title}`}
        src={img}
        className="md:hidden rounded-t"
      />
      <div className=" flex flex-col gap-4 bg-white rounded-b md:rounded-r p-8 md:p-0 md:w-3/4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-sm leading-relaxed text-wrap">{description}</span>
        <div className="flex justify-evenly gap-2 flex-wrap">
          {skills.map((skill) => {
            return (
              <span className="p-1 rounded border-2 border-green-200 text-gray-800 text-xs">
                {skill}
              </span>
            );
          })}
        </div>
        <div className="flex justify-between">
          <Link
            className="flex items-center text-xs md:gap-2 bg-green-200 rounded py-1.5 px-3 shadow hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
            href={links.preview}
            target="blank"
          >
            View Project{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </Link>
          <Link
            className="flex items-center text-xs md:gap-2 bg-green-200 rounded py-1.5 px-3 shadow hover:shadow-lg hover:bg-green-100 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
            href={links.github}
            target="blank"
          >
            View Source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <Image
        alt={`Picture of the project ${title}`}
        src={img}
        className="hidden md:block rounded shadow-lg absolute top-8 -right-16 w-52 rotate-6"
      />
      <Image
        alt="Pointing arrow"
        src={Arrow}
        className="hidden md:block absolute w-24 -top-4 right-1/3 z-10 rotate-45"
      />
    </li>
  );
};

export default Card;
