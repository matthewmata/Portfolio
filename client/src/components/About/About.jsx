import React, { Component } from 'react';
import style from './About.scss';
import profilePic from './imgs/profile-pic.jpg'

const About = (props) => (
  <section className={style.aboutContainer} id="about">
    <span className={style.row}>
      <hr className={props.width >= 768 ? style.separator : style.smallSeparator}/>
      <h3 className={style.title}>
        About Me
      </h3>
      <hr className={props.width >= 768 ? style.separator : style.smallSeparator}/>
    </span>
    {props.width >= 1024 ? (
      <div>
        <p className={style.firstSentence}>
          Hello! I'm Matthew, a full stack software engineer currently based in Los Angeles, CA.
        </p>
        <span className={style.row}>
          <img src={profilePic} className={style.profilePic}/>
          <span className={style.column}>
            <p className={style.paragraph}>
              My coding journey began when I realized that I wanted to invent solutions for life's everyday problems. I enjoy the logic of solving coding challenges by splitting a big problem into smaller tasks and systematically tackling them one at a time.
            </p>
            <p className={style.paragraph}>
              When I'm not coding, I'm spending my free time either playing Ping Pong, Surfing, or looking for new music on SoundCloud.
            </p>
          </span>
        </span>
      </div>
    ) : (
      <div className={style.smallColumn}>
        <img src={profilePic} className={style.smallProfilePic}/>
        <p className={style.smallParagraph}>
          Hello! I'm Matthew, a full stack software engineer currently based in Los Angeles, CA.
        </p>
        <hr className={style.smallHr}/>
        <p className={style.smallParagraph}>
          My coding journey began when I realized that I wanted to invent solutions for life's everyday problems. I enjoy the logic of solving coding challenges by splitting a big problem into smaller tasks and systematically tackling them one at a time.
        </p>
        <hr className={style.smallHr}/>
        <p className={style.smallParagraph}>
          When I'm not coding, I'm spending my free time either playing Ping Pong, Surfing, or looking for new music on SoundCloud.
        </p>
      </div>
    )}
  </section>
)

export default About;