import React, { Component } from 'react';
import style from './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className={style.mainContainer}>
        <div className={style.mainTextBox}>
          <h1 className={style.nameText}>
            Matthew Mata
          </h1>
          <h2 className={style.titleText}>
            Full Stack Software Engineer
          </h2>
          <hr className={style.separator}/>
          <a href='#' className={style.contactMeBox}>
            <span className={style.contactMeIcon}>
              <ion-icon name="mail"/>
            </span>
            <span>contact me</span>
          </a>
          <ul className={style.iconLinkList}>
            <li>
              <a href='#'><ion-icon name="logo-github"/></a>
            </li>
            <li>
              <a href='#'><ion-icon name="logo-linkedin"/></a>
            </li>
            <li>
              <a href='#'><ion-icon name="mail"/></a>
            </li>
          </ul>
        </div>
        <nav>
          <ul className={style.mainNav}>
            <li><a href="#features">About</a></li>
            <li><a href="#works">Tech Stack</a></li>
            <li><a href="#cities">Applications</a></li>
            <li><a href="#plans">Contact Me</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}