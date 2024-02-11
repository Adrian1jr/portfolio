import About from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div
        className="absolute top-0 z-[-2] h-screen w-full bg-white 
      bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
      ></div>
      <Navbar />
      <div className="px-10">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <BackToTopButton />
    </>
  );
}

export default App;
