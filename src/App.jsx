import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  ErrorBoundary,
  ContentContainer,
  AuthenticationContainer,
  RoutesSwitch,
} from './components';
import './css/main.css';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ContentContainer>
          <AuthenticationContainer>
            <RoutesSwitch />
          </AuthenticationContainer>
        </ContentContainer>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
