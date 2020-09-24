import React from "react";
import { ErrorBoundary } from "./components";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Front End La Liga</h1>
      </div>
    </ErrorBoundary>
  );
}

export default App;
