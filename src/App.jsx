import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary, RoutesSwitch, Authenticate } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Authenticate>
          <RoutesSwitch />
        </Authenticate>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
