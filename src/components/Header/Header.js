import styles from "./Header.module.css";

const LOGO_PATH = "https://i.ibb.co/VDr5dkY/logo.jpg";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <img src={LOGO_PATH} alt="App logo" />
      </div>
      <h1 className={styles["header__title"]}>Counts</h1>
    </header>
  );
}
