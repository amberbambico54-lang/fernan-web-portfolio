import { Link } from "react-router-dom";
import { graphicDesignImages } from "../../data/graphicDesignData";

function Gallery() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4 justify-between">
        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">Graphic Design</h2>
        <span>
          <Link
            to="/graphic-design"
            className="relative flex items-center text-sm font-semibold text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition delay-150 duration-300

        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-blue-700 dark:after:bg-blue-400
        after:transition-all after:duration-300
        hover:after:w-full"
          >
            View All &#8250;
          </Link>
        </span>
      </div>

      <div className="overflow-hidden relative mt-4 bg-gray-100 dark:bg-gray-700 rounded-lg py-3">
        <div className="flex gap-3 animate-scroll">
          {graphicDesignImages
            .slice(0, 10)
            .concat(graphicDesignImages.slice(0, 10))
            .map((image, index) => (
              <img
                key={index}
                src={`/img/graphicDesign/${image}`}
                alt={`Slide ${index + 1}`}
                className="w-40 h-28 object-cover rounded-lg shadow-md flex-shrink-0"
              />
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Gallery;
