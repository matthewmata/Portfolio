import React, { Component } from 'react';
import style from './Applications.scss'

export default class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={style.applicationsContainer}>
        <div>
          <span className={style.row}>
            <hr className={style.separator}/>
            <h3 className={style.title}>
              Portfolio
            </h3>
            <hr className={style.separator}/>
          </span>
        </div>
        <div className={style.applicationsBox}>  
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