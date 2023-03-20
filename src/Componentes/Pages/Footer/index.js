import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.ulSocial}>
        <li>
          <div className={styles.liContent}>
            <div className={styles.squares}>
              <div className={styles.firstSquare}></div>
              <div className={styles.secondSquare}></div>
            </div>
            <div className={styles.imageContent}>
              <a
                href="
                https://discord.gg/BA3eQUjhvH"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/social/Discord.svg" alt="Discord" />
              </a>
            </div>
            <p className={styles.socialText}>Discord</p>
          </div>
        </li>
        <li>
          <div className={styles.liContent}>
            <div className={styles.squares}>
              <div className={styles.firstSquare}></div>
              <div className={styles.secondSquare}></div>
            </div>
            <div className={styles.imageContent}>
              <a
                href="
          https://www.instagram.com/cristiangerster/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/social/Instagram.svg" alt="Instagram" />
              </a>
            </div>
            <p className={styles.socialText}>Instagram</p>
          </div>
        </li>
        <li>
          <div className={styles.liContent}>
            <div className={styles.squares}>
              <div className={styles.firstSquare}></div>
              <div className={styles.secondSquare}></div>
            </div>
            <div className={styles.imageContent}>
              <a href="https://t.me/Crisha7" target="_blank" rel="noreferrer">
                <img src="images/social/Telegram.svg" alt="Telegram" />
              </a>
            </div>
            <p className={styles.socialText}>Telegram</p>
          </div>
        </li>
        <li>
          <div className={styles.liContent}>
            <div className={styles.squares}>
              <div className={styles.firstSquare}></div>
              <div className={styles.secondSquare}></div>
            </div>
            <div className={styles.imageContent}>
              <a
                href="https://www.linkedin.com/in/gerstercristian/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/social/Linkedin.svg" alt="Linkedin" />
              </a>
            </div>
            <p className={styles.socialText}>LinkedIn</p>
          </div>
        </li>
        <li>
          <div className={styles.liContent}>
            <div className={styles.squares}>
              <div className={styles.firstSquare}></div>
              <div className={styles.secondSquare}></div>
            </div>
            <div className={styles.imageContent}>
              <a
                href="https://github.com/ProDIGGY-vinilos"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/social/Github.svg" alt="Github" />
              </a>
            </div>
            <p className={styles.socialText}>Github</p>
          </div>
        </li>
        <li>
          <div className={styles.liContent}>
            <div className={styles.squares}>
              <div className={styles.firstSquare}></div>
              <div className={styles.secondSquare}></div>
            </div>
            <div className={styles.imageContent}>
              <a
                href="https://www.twitch.tv/crisgers"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/social/Twitch.svg" alt="Twitch" />
              </a>
            </div>
            <p className={styles.socialText}>Twitch</p>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
