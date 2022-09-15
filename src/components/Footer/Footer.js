import styles from "./Footer.module.css";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer__msg"]}>
        &copy; {YEAR}. All rights reserved. Biswajit Mukherjee
      </p>
    </footer>
  );
}
