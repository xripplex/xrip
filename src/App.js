import React, { Component } from "react";
import "./App.css";
import XRP from "./assets/xrp.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 2,
    };
  }
  setView = (e) => {
    let view = +e.currentTarget.getAttribute("data-view");
    this.setState({ view });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={XRP} alt="x"></img>
        </header>
        <Nav view={this.state.view} setView={this.setView} />
        <Content view={this.state.view} setView={this.setView} />
        <Footer />
        <h2>
          <span className="one">OVERNIGHT</span>
        </h2>
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <NavLink onClick={this.props.setView} target="0" view={this.props.view}>
          One
        </NavLink>
        <NavLink onClick={this.props.setView} target="1" view={this.props.view}>
          Two
        </NavLink>
        <NavLink onClick={this.props.setView} target="2" view={this.props.view}>
          Three
        </NavLink>
      </div>
    );
  }
}

class NavLink extends Component {
  render() {
    let style = {
      color:
        this.props.view === +this.props.target
          ? "lightskyblue"
          : "lightskyblue",
      border:
        this.props.view === +this.props.target
          ? "3px outset orange"
          : "3px outset lightskyblue",
    };
    return (
      <div
        className="NavLink"
        onClick={this.props.onClick}
        data-view={this.props.target}
        style={style}
      >
        <span>{this.props.children}</span>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Home setView={this.props.setView} hidden={this.props.view !== 0} />
        <About setView={this.props.setView} hidden={this.props.view !== 1} />
        <Contact hidden={this.props.view !== 2} />
      </div>
    );
  }
}
class Home extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex",
    };
    return (
      <div className="container" style={style}>
        Phase One:
        <br />
        <br />
        <p className="percent">COMPLETE!</p>
      </div>
    );
  }
}
class About extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex",
    };
    return (
      <div className="container" style={style}>
        Phase Two:
        <br />
        <br />
        <p className="percent">COMPLETE!</p>
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    let style = {
      display: this.props.hidden ? "none" : "flex",
    };
    return (
      <div className="container" style={style}>
        Phase Three:
        <br />
        <br /> <p className="percent"> 11.01.2020</p>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        In{" "}
        <a href="https://twitter.com/BabaCugs" target="_blank">
          Baba
        </a>{" "}
        We Trust
      </div>
    );
  }
}

export default App;
