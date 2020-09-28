import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ErrorBoundary,
  ContentContainer,
  Authenticate,
  RoutesSwitch,
} from './components';
import './css/main.css';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ContentContainer>
          <Authenticate>
            <RoutesSwitch />
          </Authenticate>
        </ContentContainer>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
