import * as React from "react";

import LocalButton from "./Button";

const App = ({ num }: { num: number }) => (
  <div
    style={{
      background: "lightcoral",
      padding: "30px",
      borderRadius: "10px",
      border: "3px solid white",
    }}
  >
    <h1>Webpack-mf</h1>
    <div>Props number: {num ?? "No"}</div>
    <LocalButton string={"wefew"} />
  </div>
);

export default App;
