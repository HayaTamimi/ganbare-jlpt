import React from 'react'
import LeaderboardCo from "../components/result/LeaderboardCo"

export default function Leaderboard(props) {

  const { setError } = props;
  return (
    <div>
      <LeaderboardCo setError={setError}/>
    </div>
  );
}
