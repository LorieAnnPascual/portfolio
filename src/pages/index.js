import React from "react";
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div>
      <Layout>
        <section className={styles.header}>
          <div>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>Web Developer based in Rizal</p>
            <Link className={styles.btn} to="/Projects">My Portfolio Projects</Link>&nbsp;&nbsp;&nbsp;
            <Link className={styles.btn} to="/">Download my CV</Link>
          </div>
          <figure>
            <img src="/webdev.png" alt="banner" style={{maxWidth: '100%'}}/>
          </figure>
        </section>
      </Layout>
    </div>
  );
}
