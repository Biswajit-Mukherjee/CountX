import styles from "./Header.module.css";

// const HEADER_LOGO = "https://i.ibb.co/VDr5dkY/logo.jpg";
const HEADER_LOGO = "https://res.cloudinary.com/dbnt8bskc/image/upload/v1664009616/Projects/countX/logo_zytw6b.jpg";
const HEADER_TITLE = "CountX";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <img src={HEADER_LOGO} alt="App logo" />
      </div>
      <h1 className={styles["header__title"]}><code>{HEADER_TITLE}</code></h1>
    </header>
  );
}
