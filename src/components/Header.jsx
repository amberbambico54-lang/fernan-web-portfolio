import {
  HiCheckBadge,
  HiOutlineMapPin,
  HiMiniCalendarDays,
  HiEnvelope,
  HiMiniUsers,
  HiOutlineSun,
  HiMiniMoon,
} from "react-icons/hi2";

export function Header() {
  return (
    <header className=" items-center justify-between p-4">
      <div
        className="flex items-center gap-6
      "
      >
        <div className="bg-gray-700 h-28 w-28 rounded-lg overflow-hidden shadow-sm md:h-40 md:w-40">
          <img className="" />
        </div>
        <div className="flex-1 min-w-0 w-full flex-col">
          <div className="flex items-center justify-center md:justify-between mb-1">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <h1 className="text-3xl font-bold truncate">Fernan Bambico</h1>
              <HiCheckBadge color="#3b82f6" />
            </div>
            <button
              id="darkModeToggle"
              title="Switch Theme"
              class="absolute top-4 right-4 md:relative md:top-0 md:right-0 w-10 h-10 flex items-center justify-center shrink-0 rounded-lg border border-gray-300 transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-200"
            >
              <HiOutlineSun />
              {/* <HiMiniMoon /> */}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMapPin />
            <p className="text-sm">Baguio City, Benguet, Philippines</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold text-sm">
              Aspiring Full-Stack Developer | Wordpress Developer | Graphic
              Designer | N8n Automation Specialist
            </h2>
          </div>
          <div className="flex gap-4 text-sm md:text-base text-gray-700 mt-2 mb-4 font-medium md:justify-start">
            <button className="px-5 py-2.5 border-gray-500 dark:border-gray-200 bg-black rounded-lg text-white text-sm transition shadow-sm cursor-pointer flex items-center gap-2 justify-center hover:-translate-y-1 duration-300">
              <HiMiniCalendarDays />
              Schedule a Call
            </button>
            <button className="bg-white text-black border-gray-200 border px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:-translate-y-1 duration-300">
              <HiEnvelope />
              Send Mail
            </button>
            <button className="bg-white text-black border-gray-200 border px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:-translate-y-1 duration-300">
              <HiMiniUsers /> Join my Dgroup
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
