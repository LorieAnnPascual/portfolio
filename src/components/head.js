import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title}) => {
  return (
    <>
      <Helmet
        defaultTitle="Lorie Ann Pascual | My Website Portfolio"
        title={title}
        titleTemplate="%s | My Website Portfolio"
      />
    </>
  )
}

export default Head;