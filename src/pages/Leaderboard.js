import React from 'react'
import LeaderboardCo from "../components/result/LeaderboardCo"

export default function Leaderboard(props) {

  const { setError, setLoad } = props;
  return (
    <div>
      <LeaderboardCo setError={setError} setLoad={setLoad} />
    </div>
  );
}
