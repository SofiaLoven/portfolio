import Projects from "../../content/projects";
import { Project } from "@/types";
import Card from "./Card";

const ProjectList = () => {
  return (
    <>
      <h2 className="text-center md:text-start font-extrabold text-xl md:pl-16">
        {"> Projects "}
      </h2>
      <ul className="flex gap-16 md:gap-8 flex-col items-center p-8">
        {Projects.map((project: Project) => {
          return <Card info={project} />;
        })}
      </ul>
    </>
  );
};

export default ProjectList;
