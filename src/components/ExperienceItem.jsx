function ExperienceItem({ exp }) {
  return (
    <div className=" py-2">
      <div className=""></div>
      <div>
        <h3 className="font-semibold tex-gray-900 text-base">{exp.role}</h3>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 mt-0.5">{exp.company}</p>
        <span className="text-sm text-gray-600 font-base">{exp.period}</span>
      </div>
    </div>
  );
}

export default ExperienceItem;
