import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="px-10">
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
