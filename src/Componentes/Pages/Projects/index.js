import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectsLeft}>
          <div className={styles.project}>
            <h3>Project 1</h3>
            <img
              src="images/projects/landing-trackgenix.png"
              alt="Trackgenix landing page"
            ></img>
          </div>
          <div className={styles.project}>
            <h3>Project 1</h3>
            <img
              src="images/projects/landing-trackgenix.png"
              alt="Trackgenix landing page"
            ></img>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.projectsRight}>
          <div className={styles.project}></div>
          <div className={styles.project}></div>
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
