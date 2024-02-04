import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-10">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
