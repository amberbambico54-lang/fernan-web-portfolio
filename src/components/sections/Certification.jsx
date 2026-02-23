import { HiOutlineBookOpen } from "react-icons/hi2";
import { certifications } from "../../data/certificateData";

const data = certifications;

function Certification() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <HiOutlineBookOpen size={25} className="dark:text-gray-300" />
        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">Certification</h2>
      </div>
      <div className=" p-1 rounded-lg ">
        <ul>
          {data.slice(0, 7).map((cert) => (
            <li className="px-3 py-4 mb-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h1 className="text-md font-semibold dark:text-white">{cert.title}</h1>
              <p className="text-sm dark:text-gray-300">
                {cert.issuer} &bull; {cert.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Certification;
