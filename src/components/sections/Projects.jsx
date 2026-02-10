import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";

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
          <div
            key={project.id}
            className="bg-gray-100 rounded-lg hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 md:h-48 object-cover"
            />

            {/* Content wrapper with padding */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">Description</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-400 px-3 py-1 rounded-lg hover:bg-gray-200 transition"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
