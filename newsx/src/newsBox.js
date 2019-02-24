// NewsBox component

import React from "react";
import {Link} from "react-router-dom";


export const NewsBox = (props) => (
  <div className="newsBox">
    <Link to={`/source/${props.source.id}`}>
      <h2>{props.source.name}</h2>
      <h5>Country: {props.source.country}</h5>
    </Link>
  </div>
  );


