import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/about.module.css';
import { Link } from 'gatsby';

const About = () => {
  return (
      <Layout>
        <figure className={styles.aboutFigure}>
          <img src="/lorieann.jpg" alt="labp" className={styles.myPic}/>
        </figure>
        <div className={styles.about}>
          <div className={styles.content}>
            <div className={styles.aboutText}>
              <h2>About The Developer</h2>
              <p>
                I am Lorie Ann Pascual, a musician and now a web developer spcializing 
                in front-end development.
              </p><br/>
              <p>
                Aside from playing musical instruments, I've been fascinated with things related 
                to technology. When our devices at home gets broken, I go to Google or Youtube 
                and learn how to fix them on my own. From then I became the family's 'I.T.' even to 
                relatives and some friends. Sometimes I get comments saying that I should have pursued 
                an I.T. course instead of music. Although  I have that kind of 'gift' my focus at that time 
                was my music career. 
              </p><br/>
              <p>
                Then pandemic came. Rich and poor, everyone's affected including us from the creative and performing 
                arts industry. Despite the predicament we still face, I was given a time to unwind, ponder 
                and assess what and how I did during the past years. It felt like I had no growth and 
                stayed in my comfort zone for a long time. After months of self-assessment and praying, I came 
                across a website for career assessment. To make the story short, I took the assessment and the results 
                I got were all related to I.T. field. That's when I realized that maybe it's time to put my music career 
                on the side and take a step forward in entering the world of technology. 
              </p><br/>
              <p>
                'Why Web Development out of all the I.T. field?' There's this motivational quote that says 
                "Start with what you have.". Since I do have the resources I need (laptop, cellphone, internet) 
                to learn one of the in demand jobs, I did not hesitate to start. It is also a good career for 
                an introverted person like me and above all, this is where I get the growth that I wanted. In coding 
                websites there's a different kind of satisfaction when you make your code work after hours of learning and figuring 
                things out it wasn't working in the beginning. It's challenging yet fulfilling. 
              </p>
            </div>
            <div className={styles.skills}>
              <h2>Development Tools</h2>
              <p>These are the following tools I am knowledgeable/familiar with:</p>
              <div className={styles.devTools}>
                <figure className={styles.logo}>
                  <img src="/html.png" alt="html-logo" />
                  <figcaption>
                    HTML
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/css-3.png" alt="css-logo" />
                  <figcaption>
                    CSS
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/js.png" alt="js-logo"/>
                  <figcaption>
                    JAVASCRIPT
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/react.png" alt="react-logo" />
                  <figcaption>
                    REACT JS
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="php.png" alt="php-logo" />
                  <figcaption>
                    PHP
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="sass.png" alt="sass-logo" />
                  <figcaption>
                    SASS
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/bootstrap.png" alt="bootstrap-logo" />
                  <figcaption>
                    BOOTSTRAP
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/npm.png" alt="npm-logo" />
                  <figcaption>
                    NPM
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="nodejs.png" alt="nodejs-logo" />
                  <figcaption>
                    NODE JS
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/mysql.png" alt="mysql-logo" />
                  <figcaption>
                    MYSQL
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/git.png" alt="git-logo" />
                  <figcaption>
                    GIT
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/github.png" alt="github-logo" />
                  <figcaption>
                    GITHUB
                  </figcaption>
                </figure>

                <figure className={styles.logo}>
                  <img src="/visual-studio.png" alt="vscode-logo" />
                  <figcaption>
                    VS CODE
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.toTop}>
          <Link className={styles.aboutBtn} to="/About">Back to Top</Link>
        </div>
      </Layout>
  );
};

export default About;
