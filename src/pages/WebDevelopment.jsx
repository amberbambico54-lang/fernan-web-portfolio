import { projects } from "../data/projectsData";
import ProjectsItem from "../components/sections/ProjectsItem";

function WebDevelopment() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectsItem project={project} />
      ))}
    </div>
  );
}

export default WebDevelopment;
