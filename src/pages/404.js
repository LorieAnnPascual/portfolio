import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/head.js';

const Notfound = () => {
  return (
      <Layout>
        <Head title="404"/>
        <div>
          <h1>404 ERROR</h1>
          <h4>This page doesn't exist</h4>
        </div>
      </Layout>
  );
};

export default Notfound;
