import React from 'react';
import SimpleFooter from './SimpleFooter';

function ContentContainer({ children }) {
  return (
    <div className="content-container">
      {children}
      <SimpleFooter />
    </div>
  );
}

export default ContentContainer;
