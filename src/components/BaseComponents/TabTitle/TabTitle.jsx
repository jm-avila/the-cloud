import React from 'react';
import { Helmet } from 'react-helmet';

const TabTitle = ({ tabTitle = 'The Cloud - ', tabSubTitle = '' }) => {
  const displayedText = `${tabTitle} ${tabSubTitle}`.trim();
  return (
    <Helmet>
      <title>{displayedText}</title>
    </Helmet>
  );
};

export default TabTitle;
