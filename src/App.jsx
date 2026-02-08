import {
  HiCheckBadge,
  HiOutlineMapPin,
  HiMiniCalendarDays,
  HiEnvelope,
  HiMiniUsers,
} from "react-icons/hi2";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-40 lg:py-10 sm:py-10">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
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
              class="absolute top-4 right-4 md:relative md:top-0 md:right-0 w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg border border-gray-300 transition-colors duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-200"
            >
              <svg
                class="w-4 h-4 text-gray-700 dark:text-gray-300 dark-icon hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
              <svg
                class="w-4 h-4 text-gray-700 dark:text-gray-300 light-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMapPin />
            <p className="text-sm">Baguio City, Benguet, Philippines</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold text-sm">
              Aspiring Full-Stack Developer | Wordpress Developer | Graphic
              Designer |N8n Automation Specialist
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

function Footer() {
  return (
    <footer className="text-center p-5 border-t border-gray-100">
      <p>&copy;2026 Fernan Bambico. All rights reserved.</p>
      <p>Developed in Baguio City, Benguet, Philippines</p>
    </footer>
  );
}

function Main() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
      <div className="space-y-6">
        <About />
      </div>
      <div className="space-y-6">
        <Experience />
      </div>
    </main>
  );
}

export default App;
