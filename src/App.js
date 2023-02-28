import "./App.css";
import About from "./Componentes/Pages/About";
import Contact from "./Componentes/Pages/Contact";
import Navbar from "./Componentes/Pages/Navbar";
import Welcome from "./Componentes/Pages/Welcome";
import Projects from "./Componentes/Pages/Projects";
import Footer from "./Componentes/Pages/Footer";

const App = () => {
  return (
    <div class="container">
      <Welcome />
      <div class="navbar">
        <Navbar
          idHome={Welcome}
          idAbout={About}
          idProjects="projects"
          idContact="contact"
        />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
