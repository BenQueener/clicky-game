import React from "react";
import "./Score.css";

//stateless component
const Score = props => (
  <div className="score">
    <h2 className="score">Score{props.total}</h2>
    <h2 className="status">{props.status}</h2>
  </div>
);

export default Score;
