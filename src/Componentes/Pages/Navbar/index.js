/* eslint-disable no-unused-vars */
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
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
            Home{" "}
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
            About{" "}
          </Link>
        </div>
        <div className={styles.logo}>
          <img src="" alt="logo" />
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
            Projects{" "}
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
            Contact{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
