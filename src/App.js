import "./App.css";
import React from "react";

import { f0_data, phoneme_data } from "./data.js";

console.log(self.crossOriginIsolated);

function App() {
  const worker = React.useMemo(() => new Worker("./static/js/worker.js"));
  React.useEffect(() => {
    worker.addEventListener("message", (e) => {
      console.log(e);
    });
    worker.addEventListener("error", (e) => {
      console.error(e);
    });
  }, [worker]);
  const inference = async () => {
    worker.postMessage({ f0_data, phoneme_data });
  };

  return (
    <div>
      <button onClick={() => inference()}>Click me</button>
    </div>
  );
}

export default App;
