import React, { Component } from 'react';
import style from './App.scss';
import Header from '../Header/Header.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.appContainer}>
        <Header/>
      </div>
    )
  }
}

