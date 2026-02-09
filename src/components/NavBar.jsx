import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectTabs() {
  const [active, setActive] = useState("all");

  const base =
    "px-4 py-2 text-sm font-semibold rounded-lg transition duration-200";

  const activeStyle = "bg-gray-800 text-white shadow-md";

  const inactiveStyle = "bg-gray-100 text-gray-600 hover:bg-gray-200";

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Buttons on left, Back to Home on right */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActive("all")}
            className={`${base} ${active === "all" ? activeStyle : inactiveStyle}`}
          >
            Web Developement
          </button>

          <button
            onClick={() => setActive("featured")}
            className={`${base} ${active === "featured" ? activeStyle : inactiveStyle}`}
          >
            Graphic Design
          </button>

          <button
            onClick={() => setActive("archived")}
            className={`${base} ${active === "archived" ? activeStyle : inactiveStyle}`}
          >
            N8n Automation
          </button>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="text-center p-6">
        {active === "all" && <p>Web Development Projects</p>}
        {active === "featured" && <p>Graphic Design Projects</p>}
        {active === "archived" && <p>N8n Automation Projects</p>}
      </div>
    </div>
  );
}
