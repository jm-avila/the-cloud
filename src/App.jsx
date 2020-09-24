import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary, Navigation, RoutesSwitch } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Navigation />
        <RoutesSwitch />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
