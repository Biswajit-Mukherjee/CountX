import Counter from "../Counter/Counter";
import Title from "../Title/Title";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles["main"]}>
      <Title />
      <Counter />
    </main>
  );
}
