function ProjectsItem({ project }) {
  return (
    <div
      key={project.id}
      className="bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-lg transition overflow-hidden relative"
    >
      <img
        src={project.image}
        alt={project.title}
        className={`w-full h-40 md:h-48 object-cover ${project.status ? 'blur-sm' : ''}`}
      />

      {/* In Progress Overlay */}
      {project.status && (
        <div className="absolute top-0 left-0 w-full h-40 md:h-48 flex items-center justify-center bg-black/40">
          <span className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg text-sm">
            In Progress
          </span>
        </div>
      )}

      {/* Content wrapper with padding */}
      <div className={`p-4 ${project.status ? 'blur-sm' : ''}`}>
        <h3 className="font-semibold text-lg mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-gray-400 dark:border-gray-500 dark:text-gray-200 px-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          View Live
        </a>
      </div>
    </div>
  );
}

export default ProjectsItem;
