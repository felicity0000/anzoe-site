import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-black opacity-90">
        <Navbar />
        <div className="px-2 md:px-40">
          <Hero />
          <Services/>
          <Projects/>
          <About/>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default App;
