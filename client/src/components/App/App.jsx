import React, { Component } from 'react';
import style from './App.scss';
import Header from '../Header/Header.jsx';
import About from '../About/About.jsx';
import Applications from '../Applications/Applications.jsx';
import TechStack from '../TechStack/TechStack.jsx'
import ContactMe from '../ContactMe/ContactMe.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.appContainer}>
        <Header/>
        <About/>
        <Applications/>
        <TechStack/>
        <ContactMe/>
      </div>
    )
  }
}

