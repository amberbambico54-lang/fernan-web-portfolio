function Projects() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-bold text-2xl text-gray-900">
          Projects | Case Study
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <img className="h-30 w-80 bg-gray-200 rounded-lg mb-3 " />
          <h3 className="font-semibold text-lg">Project 1</h3>
          <p className="text-gray-600">Description</p>
          <p className="mb-4">techstack</p>
          <button className="border border-gray-400 px-3 py-1 rounded-lg">
            View Case Study
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">Thumbnail 2</div>
      </div>
    </div>
  );
}

export default Projects;
