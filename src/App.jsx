import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import TechStack from "./components/TechStack";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-40 lg:py-10 sm:py-10">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
      <div className="space-y-6">
        <About />
        <TechStack />
        <Projects />
      </div>
      <div className="space-y-6">
        <Education />
        <Experience />
        <Certification />
      </div>
      <div className="col-span-full">
        <Gallery />
      </div>
    </main>
  );
}

export default App;
