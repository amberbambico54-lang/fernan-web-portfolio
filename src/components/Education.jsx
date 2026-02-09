import { HiOutlineAcademicCap } from "react-icons/hi2";

function Education() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <HiOutlineAcademicCap size={25} />
        <h2 className="font-bold text-2xl text-gray-900">Education</h2>
      </div>
      <div className="flex gap-2 items-end">
        <h3 className="font-semibold">BS Information Technology</h3>
        <span className="text-sm text-gray-600">Major in Network Security</span>
      </div>
      <p>University of the Cordilleras</p>
      <span className="text-sm text-gray-600">2011 - 2016</span>
    </div>
  );
}

export default Education;
