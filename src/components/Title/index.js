import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
    <div id="head">
      <a href="/">{props.children}</a>
    </div>
    <div id="scores">Score: {props.score} Highscore: {props.highscore}
    </div>
    <br></br>
    <div id="msg">
      {props.message}
    </div>
  </div>;
}


export default Title;
