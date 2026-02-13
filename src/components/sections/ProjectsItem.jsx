function ProjectsItem({ project }) {
  return (
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
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

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
  );
}

export default ProjectsItem;
