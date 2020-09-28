import React, { useState } from 'react';

function SimpleFooter() {
  const [currentYear] = useState(getCurrntYear());

  function getCurrntYear() {
    return new Date().getFullYear();
  }
  return <footer>&copy; Copyright {currentYear}</footer>;
}

export default SimpleFooter;
