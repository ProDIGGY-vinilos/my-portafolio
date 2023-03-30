/* eslint-disable no-unused-vars */
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  //How to add hamburger menu? https://www.youtube.com/watch?v=8GPPJpiLqHk

  return (
    <nav className={styles.container}>
      <svg
        className={styles.menuH}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
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
