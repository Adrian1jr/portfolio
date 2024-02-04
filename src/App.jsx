import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="px-10">
        <h1 className="text-4xl font-bold text-center mt-8 mb-8">
          Experiencia
        </h1>

        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
