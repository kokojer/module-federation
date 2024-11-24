import { lazy, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

const ViteMF = lazy(() => import("vite-mf/vite-mf"));
const WebpackMFHost = lazy(() => import("webpack_mf_host/app"));

function App() {
  console.log(window);
  return (
    <div className="viteHost">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite-host</h1>
      <div className="mf-container">
        <ErrorBoundary fallback={<div>Что-то поломалось в ViteMF</div>}>
          <Suspense fallback={<div>Загрузка...</div>}>
            <ViteMF />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Что-то поломалось в WebpackMfHOST</div>}>
          <Suspense fallback={<div>Загрузка...</div>}>
            <WebpackMFHost />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
