function OutOfScreen() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-bold text-2xl text-gray-900">Out of Screen</h2>
      </div>
      <div>
        <p className="text-gray-600 font-medium text-base">
          Communities, Adventure and Ministry
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Beyond coding, I’m passionate about community, faith, and
          adventure—mentoring in my church discipleship group, staying active at
          the gym, and exploring new experiences that inspire growth and balance
          in life.
        </p>
      </div>
      {/* Image Carousel */}
      <div className="overflow-hidden relative mt-4 bg-gray-100 rounded-lg py-3 max-w-full md:max-w-sm md:mx-auto">
        <div className="flex gap-3 animate-scroll">
          {[
            "https://via.placeholder.com/200x150?text=Community",
            "https://via.placeholder.com/200x150?text=Adventure",
            "https://via.placeholder.com/200x150?text=Gym",
            "https://via.placeholder.com/200x150?text=Church",
            "https://via.placeholder.com/200x150?text=Community",
            "https://via.placeholder.com/200x150?text=Adventure",
            "https://via.placeholder.com/200x150?text=Gym",
            "https://via.placeholder.com/200x150?text=Church",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-40 h-35 md:w-60 md:h-63 object-cover rounded-lg shadow-md flex-shrink-0"
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

export default OutOfScreen;
