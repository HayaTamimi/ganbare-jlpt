import React from "react";
import "./LeaderboardCo.css";
import Rank from "./Rank";

export default function LeaderboardCo(props) {
  const { setError, setLoad } = props;


  return (
    <div className="container-fulid">
      <div className="leaderboard-co">
        <h2>Leaderboard🏅</h2>
        <div className="time">
          <button
            className="time-btn"
            // onClick={handleClick}
          >
            7 Days
          </button>
          <button
            className="time-btn"
            //  onClick={handleClick}
          >
            30 Days
          </button>
          <button
            className="time-btn"
            // onClick={handleClick}
          >
            All-Time
          </button>
        </div>
        <Rank
          // score={score}
          // setScore={setScore}
          setError={setError}
          setLoad={setLoad}
        />
      </div>
    </div>
  );
}