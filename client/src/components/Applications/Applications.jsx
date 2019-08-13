import React, { Component } from 'react';
import weplay from './imgs/weplay.png'
import grubhub from './imgs/grubhub.gif'
import nordstrom from './imgs/nordstrom.gif';
import style from './Applications.scss'

export default class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={style.applicationsContainer} id="applications">
        <div className={style.titleBox}>
          <span className={style.row}>
            <hr className={style.separator}/>
            <h3 className={style.title}>
              Applications
            </h3>
            <hr className={style.separator}/>
          </span>
        </div>
        <div className={style.applicationsBox}>  
          <div className={style.row}>
            <img className={style.imageLeft} src={weplay} loading="lazy"></img>
            <div className={style.projectDescriptionBoxWePlay}>
              <h2>
                WePlay 
                <span>{" "}&mdash;{` Sports Pickup Game Mobile Application`}</span>
              </h2>
              <h3>
              React-Native | Express | MySQL | Sequelize | Expo
              </h3>
              <p>
                ● Mobile application where users can join various sports matches based on user’s geo-location
              </p>
              <p>
                ● Built and styled account component which included functionality to edit profile information in the database and to view all events the user signed up for
              </p>
              <p>
                ● Set up account creation and user verification via Facebook Open Authentication
              </p>
              <br />
              <a href='https://github.com/matthewmata/weplay' target="_blank" className={style.codeBox}>
                <span className={style.icon}>
                  <ion-icon name="logo-github"/>
                </span>
                <span>View Code</span>
              </a>
            </div>
          </div>
          <hr className={style.divider}/>
          <div className={style.row}>
            <div className={style.projectDescriptionBoxGrubhub}>
              <h2>
                Grubhub
                <span>{" "}&mdash;{` System Design and DBMS Optimization`}</span>
              </h2>
              <h3>
              Express | MongoDB | Redis | Nginx | AWS EC2
              </h3>
              <p>● Benchmarked query times of 10 million records between two DBMS (MongoDB & PostgreSQL) via Artillery and selected the more optimized DBMS based on query execution times
              </p>
              <p>
              ● Reduced restaurant details database query execution time from 95000 ms to 15 ms through the use of single key indexing and caching
              </p>
              <p>
              ● Increased RPS from 500 to 5500 with 0% error rate by horizontal scaling via Least Connection load balancing and 4 AWS EC2 Server Instances
              </p>
              <br />
              <a href='https://github.com/matthewmata/nav-about' target="_blank" className={style.codeBox}>
                <span className={style.icon}>
                  <ion-icon name="logo-github"/>
                </span>
                <span>View Code</span>
              </a>
            </div>
            <img className={style.imageRight} src={grubhub} loading="lazy"></img>
          </div>
          <hr className={style.divider}/>
          <div className={style.row}>
            <img className={style.imageLeft} src={nordstrom} loading="lazy"></img>
            <div className={style.projectDescriptionBoxNordstrom}>
              <h2>
                Nordstrom
                <span>{" "}&mdash;{` Web Application Clone`}</span>
              </h2>
              <h3>
              React | CSS Modules | Express | MongoDB
              </h3>
              <p>
                ● Built main product description section which included image sliding carousels which mimicked the styling and logic of the actual Nordstrom website
              </p>
              <p>
                ● Implemented a Microservice Architecture for rendering multiple modular components onto a single proxy server, ensuring future scalability
              </p>
              <p>
                ● Served static media files through a CDN via AWS S3 to ensure faster response time and latency
              </p>
              <br />
              <a href='https://github.com/tormund-and-big-lady/product-description-service' target="_blank" className={style.codeBox}>
                <span className={style.icon}>
                  <ion-icon name="logo-github"/>
                </span>
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}