import "./App.css";
import About from "./Componentes/Pages/About";
import Contact from "./Componentes/Pages/Contact";
import Navbar from "./Componentes/Pages/Navbar";
import Welcome from "./Componentes/Pages/Welcome";
import Footer from "./Componentes/Pages/Footer";

const App = () => {
  return (
    <div class="container">
      <Welcome />
      <div class="navbar">
        <Navbar />
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
