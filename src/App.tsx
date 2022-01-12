import { Component, createSignal } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class={styles.App}>
      <scale-button variant="ghost" type="button" onClick={() => setCount((c) => c + 1)}>
        <span>{count()}</span>
      </scale-button>
    </div>
  );
};

export default App;
