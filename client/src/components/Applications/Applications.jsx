import React, { Component } from 'react';
import grubhub from './imgs/grubhub.gif'
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
            <img className={style.image} src={grubhub}></img>
            <div className={style.projectDescriptionBox}>
              <h2>
                WePlay 
                <span>{" "}&mdash;{` Sports Pickup Game Mobile Application`}</span>
              </h2>
              <h3>
              React-Native | Express | MySQL | Sequelize | Expo
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
          <hr className={style.divider}/>
          <div className={style.row}>
          <img className={style.image} src={grubhub}></img>
            <div className={style.projectDescriptionBox}>
              <h2>
                Grubhub
                <span>{" "}&mdash;{` System Design and DBMS Optimization`}</span>
              </h2>
              <h3>
              Express | MongoDB | Redis | Nginx | AWS EC2
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
          <hr className={style.divider}/>
          <div className={style.row}>
            <img className={style.image} src="https://media3.giphy.com/media/A06UFEx8jxEwU/source.gif"></img>
            <div className={style.projectDescriptionBox}>
              <h2>
                Application Title 
              </h2>
              <h3>
                React | Redux | Mongo | Express
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}