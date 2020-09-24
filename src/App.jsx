import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  ErrorBoundary,
  Navigation,
  RoutesSwitch,
  Authenticate,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Authenticate>
          <Navigation />
          <RoutesSwitch />
        </Authenticate>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
