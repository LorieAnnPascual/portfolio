import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title}) => {
  return (
    <>
      <Helmet
        defaultTitle="My Updated Portfolio | Lorie Ann Pascual Portfolio"
        title={title}
        titleTemplate="%s | Lorie Ann Pascual Portfolio"
      />
    </>
  )
}

export default Head;