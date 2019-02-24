// A news Content Box

import React from "react";

const NewsContentBox = (props) => (
  <div className="news-content-box">
    <a href={props.news.url} target="_blank" className="news-link"> 
    <div className="news-image">
      <img src={props.news.urlToImage} alt="image here" width="300px"/>
    </div>
    <div className="news-header">
      <h3>{props.news.title}</h3>
        <h6>Date: {props.news.publishedAt.slice(0,10)}</h6>
    </div>
    <div className="news-content">
      <p>{props.news.description}</p>
    </div>
    <div className="news-footer">
      <h6>Source: {props.news.source.name}</h6>
    </div>
    </a>
  </div>
  )


export default NewsContentBox;