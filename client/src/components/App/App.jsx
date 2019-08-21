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
    this.state = {
      width: 1024
    };
    this.handleWidth = this.handleWidth.bind(this);
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth }, () => console.log(this.state.width));
    window.addEventListener('resize', this.handleWidth);
  }

  handleWidth() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div className={style.appContainer}>
        <Header width={this.state.width}/>
        <About width={this.state.width}/>
        <Applications width={this.state.width}/>
        {/* <TechStack width={this.state.width}/>
        <ContactMe width={this.state.width}/> */}
      </div>
    )
  }
}

