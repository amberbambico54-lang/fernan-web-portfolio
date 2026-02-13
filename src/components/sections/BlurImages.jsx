import { useState } from "react";

function BlurImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`
        w-full h-full object-cover
        transition-all duration-500 ease-out
        hover:scale-105
        ${loaded ? "blur-0 scale-100 opacity-100" : "blur-md scale-105 opacity-70"}
      `}
    />
  );
}
export default BlurImage;
