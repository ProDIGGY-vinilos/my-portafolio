import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.listContainer}>
        <div className={styles.left}>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
        <div className={styles.logo}>
          <img src="" alt="logo" />
        </div>
        <div className={styles.right}>
          <a href="/">Projects</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
