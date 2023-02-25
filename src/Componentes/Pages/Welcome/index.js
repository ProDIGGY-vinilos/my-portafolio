import styles from "./Welcome.module.css";
import { useRef } from "react";

const Welcome = () => {
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className={styles.container} id="welcome-section">
      <h1 className={styles.name}>Cristian Gerster</h1>
      <h2 className={styles.h2Tag}>MERN Stack Developer</h2>
      <p className={styles.pTag}>
        Bienvenido a mi portfolio, aca podras conocerme un poco, ver mis
        proyectos y contactarme si gustas :).
      </p>
    </div>
  );
};

export default Welcome;
