import { HiOutlineBriefcase } from "react-icons/hi2";

function Experience() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <HiOutlineBriefcase size={25} />
        <h2 className="font-bold text-2xl text-gray-900">Experience</h2>
      </div>
      <div className="space-y-4">
        {/* 1st Experience */}
        <div className="flex items-start justify-between gap-4 py-2">
          <div className=""></div>
          <div>
            <h3 className="font-semibold tex-gray-900 text-base">
              Web Developer | Graphic Designer
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">Freelance</p>
          </div>

          <span className="text-sm text-gray-600 font-medium">
            2020 - Present
          </span>
        </div>
        {/* 2nd Experience */}
        <div className="flex items-start justify-between gap-4 py-2">
          <div className=""></div>
          <div>
            <h3 className="font-semibold tex-gray-900 text-base">
              Prompt Engineer | Data Annotator
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">Amazon</p>
          </div>

          <span className="text-sm text-gray-600 font-medium">
            2020 - Present
          </span>
        </div>
        {/* 3rd Experience */}
        <div className="flex items-start justify-between gap-4 py-2">
          <div className=""></div>
          <div className="">
            <h3 className="font-semibold tex-gray-900 text-base">
              IT & Graphic Design Instructor / Computer Technician
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">Amazon</p>
          </div>

          <span className="text-sm text-gray-600 font-medium">2017 - 2019</span>
        </div>
        {/* 4th Experience */}
        <div className="flex items-start justify-between gap-4 py-2">
          <div className=""></div>
          <div>
            <h3 className="font-semibold tex-gray-900 text-base">
              IT Support Staff (Intern)
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">Amazon</p>
          </div>

          <span className="text-sm text-gray-600 font-medium">2016 - 2017</span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
