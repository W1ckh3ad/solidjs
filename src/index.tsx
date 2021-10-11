import { render } from "solid-js/web";
import {
  defineCustomElements,
  applyPolyfills,
} from "@telekom/scale-components/loader";
import "@telekom/scale-components/dist/scale-components/scale-components.css";
import "./index.css";
import App from "./App";

applyPolyfills().then(() => {
  defineCustomElements(window);
});

render(() => <App />, document.getElementById("root") || document.children[0]);
