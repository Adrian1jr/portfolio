import About from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact";
import { DarkModeProvider } from "./components/DarkModeProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <div className="px-10">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>

      <BackToTopButton />
    </DarkModeProvider>
  );
}

export default App;
