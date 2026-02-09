import { HiOutlineBriefcase } from "react-icons/hi2";
import { experience } from "../../data/experienceData";
import ExperienceItem from "./ExperienceItem";

const data = experience;

function Experience() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <HiOutlineBriefcase size={25} />
        <h2 className="font-bold text-2xl text-gray-900">Experience</h2>
      </div>
      <div className="space-y-4">
        {/* 1st Experience */}
        {data.map((exp) => (
          <ExperienceItem exp={exp} key={exp.id} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
