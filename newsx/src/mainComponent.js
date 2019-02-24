// The main component of the project

import React from "react";
import {getSources} from "./api";
import {NewsBox} from "./newsBox.js";


// Main component of App , Shows News Sources

class MainComponent extends React.Component {
  state = {
    sources: [],
  }

  setSources = (val) => {

      if( val.sources.length > 0){
        this.setState({
          sources: val.sources,
        });
      }
 }

  componentDidMount(){
    getSources(this.setSources);
  }

  render(){
    return (
        <div className="container">
          { this.state.sources.length != 0 ? this.state.sources.map(
                (val) => <NewsBox key={val.id.toString()} source={val}/> )
            : <p>No News Source Available </p>  }
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

