import { Component, createSignal } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class={styles.App}>
      <scale-button type="button" onClick={() => setCount(count() + 1)}>
        {count()}
      </scale-button>
    </div>
  );
};

export default App;
