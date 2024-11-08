import React from 'react'
import "./Rank.css";


export default function Rank() {

  // hardcoded until i fix my database 
  const leaderboards = [
    { rank: 1, username: "Hard Coding", score: 50 },
    { rank: 2, username: "Hard Coding", score: 30 },
    { rank: 3, username: "Hard Coding", score: 10 },
  ];

  return (
    <div className="container-fulid">
      <div className="rank">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboards.map((leaderboard) => (
              <tr key={leaderboard.rank}>
                <td>{leaderboard.rank}</td>
                <td>{leaderboard.username}</td>
                <td>{leaderboard.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

