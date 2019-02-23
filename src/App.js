import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="box about">About</div>
          <div className="box education">Eduation</div>
          <div className="box projects">Projects</div>
          <div className="box certification">Certification</div>
          <div className="box me">me</div>
          <div className="box hobies">Hobies</div>
          <div className="box blog">Blog</div>
          <div className="box repo">Repo</div>
          <div className="box contacts">Contacts</div>

        </div>
      </div>
    );
  }
}

export default App;
