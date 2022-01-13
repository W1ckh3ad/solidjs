import { Component, createSignal } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  let btn;
  return (
    <div class={styles.App}>
      <scale-button
        variant="ghost"
        type="button"
        onClick={() => setCount((c) => c + 1)}
        ref={btn}
        class="test"
      >
        {count()}
      </scale-button>
    </div>
  );
};

export default App;
