import React from 'react'
import "./LeaderboardCo.css";
import Rank from "./Rank"


export default function LeaderboardCo() {
  // import axios and fetch leaderboard data
  
  const handleClick = (e) => {
  console.log(e.target)
}
  
  return (
    <div className="container-fulid">
      <div className="leaderboard-co">
        <h2>Leaderboard🏅</h2>
        <div className="time">
          <button onClick={handleClick} className="time-btn">
            7 Days
          </button>
          <button onClick={handleClick} className="time-btn">
            30 Days
          </button>
          <button onClick={handleClick} className="time-btn">
            All-Time
          </button>
        </div>
        <Rank />
      </div>
    </div>
  );
}

