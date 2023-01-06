import React from "react";
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { saveAs } from 'file-saver';
import Head from '../components/head.js';

export default function Home() {

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1sN3HSUKEefJ9dBQgciKEt602Zr_oO0hf/view?usp=sharing", 
      "LorieAnnPascual-FrontEndDevCV.pdf"
    );
  }


  return (
    <div className={styles.home}>
       <Head title="Home"/>
      <Layout>
        <section className={styles.header}>
          <div>
            <h2>Design</h2>
            <h2 className={styles.develop}>Develop & Deploy</h2>
            <h1>Web Developer based in Rizal</h1>
            <div className={styles.homeBtn}>
            <Link className={styles.btn} to="/Projects">My Portfolio Projects</Link>
            <Link className={styles.btn} to="/"
                  target="_blank" 
                  type="button"
                  onClick={saveFile}
                  >Download my CV
              </Link>
            </div>
          </div>
          <figure>
            <img src="/webdev.png" alt="banner" style={{maxWidth: '100%'}} className={styles.banner}/>
          </figure>
        </section>
      </Layout>
    </div>
  );
}

