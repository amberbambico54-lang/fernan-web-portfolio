import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4 justify-between">
        <h2 className="font-bold text-2xl text-gray-900">
          Projects | Case Study
        </h2>
        <span>
          <Link
            to="/projects"
            className="relative flex items-center text-sm font-semibold text-blue-500 hover:text-blue-700 transition delay-150 duration-300

        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-blue-700
        after:transition-all after:duration-300
        hover:after:w-full"
          >
            View All &#8250;
          </Link>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(0, 4).map((project) => (
          <ProjectsItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
