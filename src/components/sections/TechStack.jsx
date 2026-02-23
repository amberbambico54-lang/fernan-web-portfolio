import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { techStack } from "../../data/techStackData";

import CategoryItem from "../ui/CategoryItem";

const data = techStack;
console.log(data);
function TechStack() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <HiOutlineCog6Tooth size={25} className="dark:text-gray-300" />
        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">Tech Stack</h2>
      </div>
      {data.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
}

export default TechStack;
