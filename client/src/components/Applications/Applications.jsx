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
        <div>
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
            <img className={style.image} src={weplay}></img>
            <div className={style.projectDescriptionBoxWePlay}>
              <h2>
                WePlay 
                <span>{" "}&mdash;{` Sports Pickup Game Mobile Application`}</span>
              </h2>
              <h3>
              React-Native | Express | MySQL | Sequelize | Expo
              </h3>
              <p>Mobile application where users can join various sports matches based on user’s geo-location. I built and styled the account component which included functionality to edit profile information in the database and to view all events the user signed up for. I also help set up account creation and user verification via Facebook Open Authentication.</p>
            </div>
          </div>
          <hr className={style.divider}/>
          <div className={style.row}>
          <img className={style.image} src={grubhub}></img>
            <div className={style.projectDescriptionBoxGrubhub}>
              <h2>
                Grubhub
                <span>{" "}&mdash;{` System Design and DBMS Optimization`}</span>
              </h2>
              <h3>
              Express | MongoDB | Redis | Nginx | AWS EC2
              </h3>
              <p> Worked on the backend of a clone of Grubhub, where I benchmarked query times of 10 million records between two DBMS (MongoDB & PostgreSQL) via Artillery and selected the more optimized DBMS based on query execution times. I reduced restaurant details database query execution time from 95000 ms to 15 ms through the use of single key indexing and caching. I increased RPS from 500 to 5500 with 0% error rate by horizontal scaling via  Least Connection load balancing and 4 AWS EC2 Server Instances.</p>
            </div>
          </div>
          <hr className={style.divider}/>
          <div className={style.row}>
            <img className={style.image} src={nordstrom}></img>
            <div className={style.projectDescriptionBoxNordstrom}>
              <h2>
                Nordstrom
                <span>{" "}&mdash;{` Web Application Clone`}</span>
              </h2>
              <h3>
              React | CSS Modules | Express | MongoDB
              </h3>
              <p> Created the front end for a clone of Nordstrom's website, where I built the main product description section which included image sliding carousels which mimicked the styling and logic of the actual Nordstrom website. I implemented a Microservice Architecture for rendering multiple modular components onto a single proxy server, ensuring future scalability. I also served the static media files on a CDN via AWS S3 to ensure faster response time and latency.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}