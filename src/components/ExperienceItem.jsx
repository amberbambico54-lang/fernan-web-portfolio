function ExperienceItem({ exp }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className=""></div>
      <div>
        <h3 className="font-semibold tex-gray-900 text-base">
          Web Developer | Graphic Designer
        </h3>
        <p className="text-sm text-gray-600 mt-0.5">Freelance</p>
      </div>

      <span className="text-sm text-gray-600 font-medium">2020 - Present</span>
    </div>
  );
}

export default ExperienceItem;
