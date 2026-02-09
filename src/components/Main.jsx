import { Header } from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Certification from "./Certification";
import TechStack from "./TechStack";
import Gallery from "./Gallery";
import OutOfScreen from "./OutOfScreen";

function Main() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 flex-grow">
        <div className="space-y-6">
          <About />
          <TechStack />
          <Projects />
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

export default Main;
