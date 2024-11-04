import { lazy, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import type { App } from "vite-mf/dist/types/App";

const ViteMF: App = lazy(() => import("vite-mf/vite-mf"));

function App() {
  console.log(window);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite-host</h1>
      <div>
        <ErrorBoundary fallback={<div>Что-то поломалось</div>}>
          <Suspense fallback={<div>Загрузка...</div>}>
            <ViteMF />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
