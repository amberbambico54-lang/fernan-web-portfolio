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
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="h-auto w-60 sm:h-auto sm:w-40 md:h-auto md:w-40 rounded-lg overflow-hidden shadow-md border border-gray-300 ">
          <img className="" src="/img/personaldp.png" />
        </div>
        <div className="flex-1 min-w-0 w-full flex-col text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-between mb-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold truncate">
                Fernan Bambico
              </h1>
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
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <HiOutlineMapPin />
            <p className="text-sm">Baguio City, Benguet, Philippines</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold text-xs md:text-sm">
              Aspiring Full-Stack Developer | Wordpress Developer | Graphic
              Designer | N8n Automation Specialist
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-700 mt-2 mb-4 font-medium">
            <button className="px-4 sm:px-5 py-2.5 border-gray-500 dark:border-gray-200 bg-black rounded-lg text-white text-sm transition shadow-sm cursor-pointer flex items-center gap-2 justify-center hover:-translate-y-1 duration-300">
              <HiMiniCalendarDays />
              Schedule a Call
            </button>
            <button className="bg-white text-black border-gray-200 border px-4 sm:px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:-translate-y-1 duration-300">
              <HiEnvelope />
              Send Mail
            </button>
            <button className="bg-white text-black border-gray-200 border px-4 sm:px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:-translate-y-1 duration-300">
              <HiMiniUsers /> Join my Dgroup
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
