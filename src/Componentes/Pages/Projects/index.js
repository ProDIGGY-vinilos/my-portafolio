import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.leftContainer}>
        <h1>Projects</h1>
        <div className={styles.left}>
          <div className={styles.project}>
            <h2 className={styles.projectTitle}>Project 1</h2>
            <img src="images/projects/landing-trackgenix.png" alt="" />
            <div className={styles.projectBtns}>
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
            </div>
          </div>
          <div className={styles.project}> </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.project}> </div>
        <div className={styles.project}> </div>
      </div>
    </div>
  );
};

export default Projects;
