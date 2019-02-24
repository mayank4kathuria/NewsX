// The main component of the project

import React from "react";
import {getSources} from "./api";
import {NewsBox} from "./newsBox.js";

class MainComponent extends React.Component {
  state = {
    sources: [],
  }

  ss = (val) => {

      if( val.sources.length > 0){
        this.setState({
          sources: val.sources,
        });
      }
 }

  componentDidMount(){
    getSources(this.ss);
  }

  render(){
    return (
        <div className="container">
          { this.state.sources.length != 0 ? this.state.sources.map(
                (val) => <NewsBox source={val}/> )
            : <p>No News Available </p>  }
            <div className="footer">
              <footer> MADE WITH LOVE,SWEAT,HARD WORK AND GOOGLE SEARCHES BY 
                <span><a href="https://github.com/mayank4kathuria" target="_blank"> MAYANK KATHURIA</a></span> 
              </footer>
            </div>
        </div>
      );
  }

}


export default MainComponent;

