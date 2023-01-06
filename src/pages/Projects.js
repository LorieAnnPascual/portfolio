import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/projects.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'gatsby';
import Head from '../components/head.js';

const Projects = () => {
  return (
    
      <Layout>
        <Head title="Projects"/>
        <div className={styles.portfolio}>
          <h2>Portfolio</h2>
          <h3>Projects & Websites I've created</h3>
        </div>
        <div className={styles.projects}>
         
          <Card sx={{ maxWidth: 345 }}>
          <Link to="https://lorieannpascual.github.io/lorie_online-magazine.github.io/" target="_blank" className={styles.cardLink}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/online-magazine.png"
                alt="Himig"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HIMIG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A responsive online magazine website that highlights
                  Filipino music and artists. It is made with HTML, CSS and Bootstrap.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <Link to="https://lorieannpascual.github.io/lorie_e-calculator.github.io/" target="_blank" className={styles.cardLink}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/javascript-calculator.png"
                  alt="calculator"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    BASIC CALCULATOR
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This simple calculator was developed using
                     HTML, CSS and Javascript.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <Link to="https://github.com/LorieAnnPascual/Transcription-Service" target="_blank" className={styles.cardLink}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/musika.png"
                  alt="capstone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MUSIKA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This collaborative capstone project is an E-commerce digital 
                    music transcription website selling OPM song transcriptions.
                    It is made with ReactJS for front-end, MySQL for handling database and Laravel for backend.

                    (Not yet live)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <Link to="https://github.com/LorieAnnPascual/todolist_journal-laravel" target="_blank" className={styles.cardLink}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/crud.png"
                  alt="todolist"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    TO-DO LIST/JOURNAL
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A simple CRUD application using Laravel and MySQL for the database handling. 

                    (Not yet live)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </div>

        <div className={styles.toTop}>
          <Link className={styles.projBtn} to="/Projects">Back to Top</Link>
        </div>
      </Layout>
  );
};

export default Projects;
