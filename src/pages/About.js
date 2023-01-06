import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/about.module.css';
import { Link } from 'gatsby';
import Head from '../components/head.js';

const About = () => {
  return (
      <Layout>
        <Head title="About Me"/>
        <figure className={styles.aboutFigure}>
          <img src="/lorieann.jpg" alt="labp" loading='lazy' className={styles.myPic}/>
        </figure>
        <div className={styles.about}>
          <div className={styles.content}>
            <div className={styles.aboutText}>
              <h2 className={styles.aboutTitle}>About The Developer</h2>
              <p>
                I am Lorie Ann Pascual, a musician and now a web developer spcializing 
                in front-end development.
              </p><br/>
              <p>
              I have a passion for both music and technology. Whenever something in my home breaks, I enjoy researching and figuring out how to fix it myself. This curiosity has even earned me a reputation as the go-to "I.T. guy" among my family and friends. While I do have a natural aptitude for technology, I ultimately decided to pursue a career in music. However, I still enjoy using my technical skills to help others and occasionally get comments suggesting that I should have pursued a formal education in I.T.
              </p><br/>
              <p>
              The pandemic has had an impact on everyone, including those in the creative and performing arts industry. During this time, I had the opportunity to reflect on my career and realize that I had been stagnant and stuck in my comfort zone for too long. I sought out a career assessment website and was surprised to find that the results all pointed towards a career in the I.T. field. This realization made me consider taking a break from my music career and exploring the world of technology.
              </p><br/>
              <p>
              "Why did I choose web development over other fields in I.T.? I was motivated by the quote 'Start with what you have.' I had the resources I needed (such as a laptop, phone, and internet) to start learning a high-demand skill, and web development seemed like the perfect fit for someone like me who is introverted. It also offered the growth and fulfillment that I was looking for. There's a sense of satisfaction that comes with solving coding problems and seeing your code come to life after putting in the time and effort to learn and troubleshoot. Web development is challenging, but it's also very rewarding."
              </p>
            </div>
            <div className={styles.skills}>
              <h2 className={styles.aboutTitle}>Development Tools</h2>
              <p className={styles.aboutTitle}>These are the following tools I am knowledgeable/familiar with:</p>
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

                <figure className={styles.logo}>
                  <img src="/icons8-wordpress.svg" alt="wordpress-logo" />
                  <figcaption>
                    WORDPRESS
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
