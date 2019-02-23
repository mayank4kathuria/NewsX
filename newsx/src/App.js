import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import MainComponent from "./mainComponent.js";
import NewsViewer from "./newsViewer.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainComponent}/>
        <Route path="/source/:sourceId" component={NewsViewer} />
      </div>
    );
  }
}

export default App;
