import { Header } from "../components/Header";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Certification from "../components/sections/Certification";
import TechStack from "../components/sections/TechStack";
import Gallery from "../components/sections/Gallery";
import OutOfScreen from "../components/sections/OutOfScreen";
import WorkTogether from "../components/sections/WorkTogether";

function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 flex-grow">
        <div className="space-y-6">
          <About />
          <TechStack />
          <Projects />
          <WorkTogether />
        </div>
        <div className="space-y-6">
          <Education />
          <Experience />
          <Certification />
          <OutOfScreen />
        </div>
        <div className="col-span-full">
          <Gallery />
        </div>
      </main>
    </>
  );
}

export default Home;
