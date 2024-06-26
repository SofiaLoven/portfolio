import Projects from "../../content/projects";
import { Project } from "@/types";
import Card from "./Card";

const ProjectList = () => {
  return (
    <ul className="flex gap-8 flex-col items-center">
      {Projects.map((project: Project) => {
        return <Card info={project} />;
      })}
    </ul>
  );
};

export default ProjectList;
