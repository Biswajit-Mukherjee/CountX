import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  const decrementHandler = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className={styles["counter"]}>
      <p className={styles["counter__value"]} role="paragraph">
        <span>{counter}</span>
      </p>

      <div className={styles["counter__actions"]}>
        <button className={styles["btn"]} onClick={decrementHandler}>
          Decrement
        </button>

        <button className={styles["btn"]} onClick={resetHandler}>
          Reset
        </button>

        <button className={styles["btn"]} onClick={incrementHandler}>
          Increment
        </button>
      </div>
    </div>
  );
}
