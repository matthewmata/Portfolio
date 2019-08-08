import React, { Component } from 'react';
import style from './About.scss';
import profilePic from './imgs/profile-pic.jpg'

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <section className={style.aboutContainer} id="about">
        <span className={style.row}>
          <hr className={style.separator}/>
          <h3 className={style.title}>
            About Me
          </h3>
          <hr className={style.separator}/>
        </span>
        <p className={style.firstSentence}>
          Hello! I'm Matthew, a full stack software engineer currently based in Los Angeles, CA.
        </p>
        <span className={style.row}>
          <img src={profilePic} className={style.profilePic}/>
          <p className={style.paragraph}>
            My passion for coding really started when I realized I could build amazing applications that could impact people's lives in a positive way. When I'm not coding, I usually spend my free time either playing Ping Pong or trying to find new music in the dark depths of SoundCloud. I also love traveling. My favorite place I've been too so far would have to be Japan.
          </p>
        </span>
      </section>
    )
  }
}