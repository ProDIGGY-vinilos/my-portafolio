import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Proyectos</h2>
        <div className={styles.projectsLeft}>
          <div className={styles.project}>
            <img
              src="images/projects/landing-trackgenix.png"
              alt="Landing Trackgenix"
            />
            <h3 className={styles.projectTitle}>Landing Trackgenix</h3>
            <div className={styles.projectBtns}>
              <a
                href="https://github.com/ProDIGGY-vinilos/BaSP-A2022-Etapa-1"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btnGitt}></div>
              </a>
              <a
                href="https://prodiggy-vinilos.github.io/BaSP-A2022-Etapa-1/Semana-07/views/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btnView}></div>
              </a>
            </div>
          </div>
          <div className={styles.project}>
            <img src="images/projects/note-app.png" alt="Notes App" />
            <h3 className={styles.projectTitle}>Notes App</h3>
            <div className={styles.projectBtns}>
              <a
                href="https://github.com/ProDIGGY-vinilos/notes-app"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btnGitt}></div>
              </a>
              <a
                href="https://notes-app-prodiggy.netlify.app/notes"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btnView}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.titlee}>Projects</h2>

        <div className={styles.projectsRight}>
          <div className={styles.project}>
            <img src="images/projects/weather-app.png" alt="Weather App" />
            <h3 className={styles.projectTitle}>Weather App</h3>
            <div className={styles.projectBtns}>
              <a
                href="https://github.com/ProDIGGY-vinilos/weather-app"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btnGitt}></div>
              </a>
              <a
                href="https://weather-app-eight-rosy-80.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btnView}></div>
              </a>
            </div>
          </div>
          <div className={styles.project}>
            <img src="images/projects/portfolio.png" alt="Portafolio" />
            <h3 className={styles.projectTitle}>Portafolio</h3>
            <div className={styles.projectBtns}>
              <a
                href="https://github.com/ProDIGGY-vinilos/my-portafolio"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btnGitt}></div>
              </a>
              <a
                href="https://gerster-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.btnView}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

/* <div className={styles.projectBtns}>
              <button className={styles.btnGitt}>
                <img
                  className={styles.btnGit}
                  src="images/social/github.svg"
                  alt="github"
                ></img>
                Repo
              </button>
              <button className={styles.btnView}>
                <img
                  className={styles.btnWeb}
                  src="images/projects/web.svg"
                  alt="View"
                ></img>
                View
              </button>
            </div> */
