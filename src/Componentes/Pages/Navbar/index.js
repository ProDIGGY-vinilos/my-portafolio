/* eslint-disable no-unused-vars */
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.listContainer}>
        <div className={styles.left}>
          <Link
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.aTag}
          >
            {" "}
            Inicio{" "}
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.aTag}
          >
            Sobre mi{" "}
          </Link>
        </div>
        <div className={styles.logo}>
          <img src="images/logo.svg" alt="logo" />
        </div>
        <div className={styles.right}>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.aTag}
          >
            {" "}
            Proyectos{" "}
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.aTag}
          >
            {" "}
            Contacto{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
