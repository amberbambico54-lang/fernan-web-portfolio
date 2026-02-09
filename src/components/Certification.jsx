import { certifications } from "../../data/certificateData";

const data = certifications;

function Certification() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-bold text-2xl text-gray-900">Certification</h2>
      </div>
      <div className=" p-1 rounded-lg ">
        <ul>
          {data.map((cert) => (
            <li className="p-3 mb-3 bg-gray-200 rounded-lg">
              <h1 className="text-md font-semibold">{cert.title}</h1>
              <p className="text-sm">
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
