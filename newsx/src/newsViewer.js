// A News Viewer Component

import React from "react";
import {getNews} from "./api.js";
import NewsContentBox from "./newsContentBox.js";
import {Link} from "react-router-dom";
import "./App.css";


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
    const showingNews = this.state.news
    return (
      <div className="container">
        <Link to="/" className="back_button"> Go Back </Link>
        { showingNews.map(
          val => <NewsContentBox news={val} />  )
        }
        <div className="footer">
              <footer> MADE WITH LOVE,SWEAT,HARD WORK AND GOOGLE SEARCHES BY <span>MAYANK KATHURIA</span> </footer>
            </div>
      </div>
      );
  }
}


export default NewsViewer;