// A News Viewer Component

import React from "react";
import {getNews} from "./api.js";
import NewsContentBox from "./newsContentBox.js";
import {Link} from "react-router-dom";
import "./App.css";

// News Viewer Component, Fetches and displays News from Selected Sources

class NewsViewer extends React.Component{

  state = {
    news: [],
  }

  setNews = (news) => {
    this.setState(() => ({
      news,
    }));

  }

  componentDidMount(){
    const {sourceId} = this.props.match.params;
    getNews(this.setNews,sourceId);
  }

  render(){
    const showingNews = this.state.news;
    return (
      <div className="container">
        <Link to="/" className="back_button"> Go Back </Link>
        { showingNews.length != 0 ? showingNews.map(
          val => <NewsContentBox key = {val.source.name.toString() }news={val} />  )
          : <p>No News Available from the source</p>
        }
        <div className="footer">
              <footer> MADE WITH LOVE,SWEAT,HARD WORK AND GOOGLE SEARCHES BY 
                <span><a href="https://github.com/mayank4kathuria" target="_blank"> MAYANK KATHURIA</a></span> 
              </footer>
            </div>
      </div>
      );
  }
}


export default NewsViewer;