import "./App.css";
import About from "./Componentes/Pages/About";
import Contact from "./Componentes/Pages/Contact";
import Navbar from "./Componentes/Pages/Navbar";
import Welcome from "./Componentes/Pages/Welcome";
import Projects from "./Componentes/Pages/Projects";
import Footer from "./Componentes/Pages/Footer";
import Line from "./Componentes/Pages/Line";

const App = () => {
  return (
    <div class="container">
      <Welcome />
      <Navbar
        idHome={Welcome}
        idAbout={About}
        idProjects={Projects}
        idContact={Contact}
      />
      <div class="wrapper">
        <About />
        <Projects />
        <Contact />
        <Line />
      </div>
      <Footer />
    </div>
  );
};

export default App;
