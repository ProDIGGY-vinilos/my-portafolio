import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.about}>
        <div className={styles.aboutLeft}>
          <p className={styles.introduction}>
            Hola! como dije mas arriba, me llamo Cristian Gerster y soy un
            desarrollador MERN stack & SQL en constante desarrollo.
          </p>
          <p className={styles.introduction}>
            Me considero apasionado por lo que me gusta, autodidacta, sociable,
            solidario, siempre busco aprender y me gusta entender el porque de
            las cosas para poder llevarlas al siguiente nivel.{" "}
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.aboutRight}>
          <h2 className={styles.skillsTitle}>Habilidades</h2>
          <div className={styles.skills}>
            <div className={styles.skillsItem}>
              <img src="images/skills/html.svg" alt="HTML" />
            </div>
            <div className={styles.skillsItem}>
              <img src="images/skills/css.svg" alt="CSS" />
            </div>
            <div className={styles.skillsItem}>
              <img src="images/skills/react.svg" alt="React" />
            </div>

            <div className={styles.skillsItem}>
              <img src="images/skills/javascript.svg" alt="JavaScript" />
            </div>
            <div className={styles.skillsItem}>
              <img src="images/skills/nodejs.svg" alt="Node.JS" />
            </div>
            <div className={styles.skillsItem}>
              <img src="images/skills/expressjs.svg" alt="Express.JS" />
            </div>
            <div className={styles.skillsItem}>
              <img src="images/skills/firebase.svg" alt="Firebase" />
            </div>
            <div className={styles.skillsItem}>
              <img src="images/skills/git.svg" alt="Git" />
            </div>
            <div className={styles.skillsItem}>
              <img src="images/skills/mongodb.svg" alt="MongoDB" />
            </div>
            <div className={styles.skillsItem}>
              <img src="images/skills/mySql.svg" alt="MySQL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
