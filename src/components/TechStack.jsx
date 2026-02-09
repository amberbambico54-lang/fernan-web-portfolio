import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { techStack } from "../../data/techStackData";

import CategoryItem from "./CategoryItem";

const data = techStack;
console.log(data);
function TechStack() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <HiOutlineCog6Tooth size={25} />
        <h2 className="font-bold text-2xl text-gray-900">Tech Stack</h2>
      </div>
      {data.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
}

export default TechStack;
