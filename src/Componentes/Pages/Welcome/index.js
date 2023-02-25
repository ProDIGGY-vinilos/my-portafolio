import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSide}>
        <h1 className={styles.name}>CRISTIAN GERSTER</h1>
        <p className={styles.pTag}>
          Desarrollador MERN stack & SQL en constante desarrollo
        </p>
      </div>
      <div className={styles.imageSide}>
        <img
          className={styles.image}
          src="images/profile.png"
          alt="my profile"
        />
      </div>
    </div>
  );
};

export default Welcome;
