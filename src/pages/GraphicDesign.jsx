import BlurImage from "../components/sections/BlurImages";
import { graphicDesignImages } from "../data/graphicDesignData";

function GraphicDesign() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {graphicDesignImages.map((image, index) => (
        <div
          key={index}
          className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <BlurImage
            src={`/img/graphicDesign/${image}`}
            alt={`Graphic Design ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default GraphicDesign;
