import { HiMiniCalendarDays, HiEnvelope, HiMiniUsers } from "react-icons/hi2";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function WorkTogether() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-5">
      {/* LEFT SIDE */}
      <div className="md:w-3/5">
        <h2 className="font-black text-2xl text-gray-900 dark:text-white mb-4">
          Let's work <span className="text-gray-400">Together.</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          Available for frontend and WordPress freelance projects, with
          experience in React, Tailwind CSS, API integration, and workflow
          automation as I grow into full-stack development.
        </p>
        <div className="py-2">
          <h3 className="text-xs uppercase tracking-[2px] dark:text-gray-300">
            Follow Me
          </h3>
          <div className="mt-5 flex gap-2 ">
            <a
              href="https://github.com/amberbambico54-lang"
              target="_blank"
              className="inline-flex items-center justify-center w-9 h-9 border border-gray-300 dark:border-gray-600 rounded-md hover:border-black dark:hover:border-gray-400 hover:-translate-y-0.5 transition duration-200 shadow"
            >
              <BsGithub className="text-lg text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/fernan-bambico/"
              target="_blank"
              className="inline-flex items-center justify-center w-9 h-9 border border-gray-300 dark:border-gray-600 rounded-md hover:border-black dark:hover:border-gray-400 hover:-translate-y-0.5 transition duration-200 shadow"
            >
              <BsLinkedin className="text-lg text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:border-black dark:hover:border-gray-400 hover:-translate-y-0.5 transition duration-200 shadow-sm"
            >
              <BsGithub className="text-lg text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-2/5 flex flex-col gap-3 text-sm font-medium">
        <h3 className="uppercase font-bold text-xs tracking-[1px] text-gray-400">
          Get in Touch
        </h3>
        <a
          href="https://calendly.com/amberbambico54/30min"
          target="_blank"
          className="px-5 py-4 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg flex items-center justify-left gap-2 hover:-translate-y-1 transition duration-300 shadow-sm"
        >
          <HiMiniCalendarDays
            size={24}
            className="text-gray-500 dark:text-gray-400"
          />
          <div>
            <p className="text-xs font-bold mb-1 uppercase tracking-[2px] text-gray-400">
              Let's Talk
            </p>
            <span className="tracking-[0.5px]">Schedule a Call</span>
          </div>
        </a>

        <a
          href="mailto:amberbambico.54@gmail.com"
          className="px-5 py-2.5 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-200 dark:border-gray-600 rounded-lg flex items-center justify-left gap-2 hover:-translate-y-1 transition duration-300"
        >
          <HiEnvelope size={24} className="text-gray-500 dark:text-gray-400" />
          <div>
            <p className="text-xs font-bold mb-1 tracking-[2px] uppercase text-gray-400">
              Email
            </p>
            <span className="tracking-[0.5px]">amberbambico.54@gmail.com</span>
          </div>
        </a>

        <a className="px-5 py-2.5 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-200 dark:border-gray-600 rounded-lg flex items-center justify-left gap-2 hover:-translate-y-1 transition duration-300">
          <HiMiniUsers size={24} className="text-gray-500 dark:text-gray-400" />
          <div>
            <p className="text-xs font-bold mb-1 tracking-[2px] uppercase text-gray-400">
              Community
            </p>
            <span className="tracking-[0.5px]">
              Get to know Christian Groups
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default WorkTogether;
