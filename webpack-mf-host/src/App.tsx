import * as React from "react";

import LocalButton from "./Button";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { loadRemote } from "@module-federation/enhanced/runtime";

import { init } from "@module-federation/enhanced/runtime";

init({
  name: "webpack_mf_host",
  remotes: [
    {
      name: "webpack_mf",
      entry: "http://localhost:3003/remoteEntry.js",
    },
  ],
});

const WebpackMF = lazy(async () => await loadRemote("webpack_mf/app"));

const App = () => (
  <div
    style={{
      background: "lightblue",
      padding: "30px",
      borderRadius: "10px",
      border: "3px solid white",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}
  >
    <h1>Webpack-mf-host</h1>
    <ErrorBoundary fallback={<div>Что-то поломалось в WebpackMF</div>}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <WebpackMF num={5} />
      </Suspense>
    </ErrorBoundary>
    <LocalButton />
  </div>
);

export default App;
