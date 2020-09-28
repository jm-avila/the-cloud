import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary, RoutesSwitch, Authenticate } from './components';
import './css/main.css';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className="content-container">
          <Authenticate>
            <RoutesSwitch />
          </Authenticate>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
