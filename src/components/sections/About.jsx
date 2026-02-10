import { HiOutlineInformationCircle } from "react-icons/hi2";

function About() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
      <div className="flex items-center gap-2 mb-4">
        <HiOutlineInformationCircle size={25} color="#444444" />
        <h2 className="font-bold text-2xl text-gray-900">About me.</h2>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        I’m an aspiring Full-Stack Developer with a strong focus on frontend
        development and a background in graphic design and IT. I enjoy
        transforming ideas into responsive, user-friendly web experiences and
        continuously improving both the visual and technical sides of my work.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        Currently, I specialize in building interfaces using React, Tailwind
        CSS, JavaScript, and WordPress, while actively expanding my skills
        toward full-stack development, including backend concepts, APIs, and
        database integration. Alongside web development, I also have basic
        experience with n8n automation, exploring ways to streamline workflows
        and connect services through low-code solutions.
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        Through self-initiated projects and freelance work—ranging from
        directory listing websites to interactive web apps—I aim to combine
        design thinking, performance, and practical problem-solving to create
        meaningful digital products.
      </p>
    </div>
  );
}

export default About;
