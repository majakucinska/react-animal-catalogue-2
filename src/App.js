import React, { Component } from 'react';
import Catalogue from "./Catalogue";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Catalogue />
          <footer>This project was coded by Maja Kucinska-Kijo and is {""}
            <a href="https://github.com/majakucinska/react-animal-catalogue">
                open-sourced on GitHub
            </a>
          </footer>
      </div>
    );
  }
}

export default App;
