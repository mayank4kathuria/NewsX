import React, { Component } from 'react';
import {Route} from "react-router-dom";
import MainComponent from "./mainComponent.js";
import NewsViewer from "./newsViewer.js";
import './App.css';


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
