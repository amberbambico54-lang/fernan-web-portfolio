import { automations } from "../data/automation";

function Automation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {automations.map((automation) => (
        <div
          key={automation.id}
          className="bg-white dark:bg-gray-200 dark:border-gray-400 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
        >
          <img
            src={automation.image}
            alt={automation.title}
            className="w-full h-40 md:h-48 object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">
              {automation.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-700 mb-3">
              {automation.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {automation.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Automation;
