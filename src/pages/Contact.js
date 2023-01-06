import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/contact.module.css';
import Head from '../components/head.js';

const Contact = () => {
  return (
      <Layout>
        <Head title="Contact Me"/>
        <div>
          <figure className="d-flex justify-content-center">
            <img src="/contact.png" alt="contact" className={styles.contact}/>
          </figure>
        </div>
      </Layout>
  );
};

export default Contact;
