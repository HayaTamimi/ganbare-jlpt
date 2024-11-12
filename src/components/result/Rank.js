import React, { useState, useEffect } from "react";
import "./Rank.css";
import axios from "axios";

export default function Rank(props) {
  const { setError } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultsResponse = await axios.get(
          "https://ganbare.onrender.com/api/v1/results"
        );
        const usernamesResponse = await axios.get(
          "https://ganbare.onrender.com/api/v1/users"
        );

        const sortedResults = resultsResponse.data.sort(
          (a, b) => b.totalScore - a.totalScore
        );

        const combinedData = sortedResults.map((result, index) => ({
          ...result,
          rank: index + 1,
          username:
            usernamesResponse.data.find((user) => user.userId === result.userId)
              ?.username || "Unknown User",
        }));

        setData(combinedData);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
      }
    };

    fetchData();
  }, []);

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
            {data.map((result) => (
              <tr key={result.resultId}>
                <td>{result.rank}</td>
                <td>{result.username}</td>
                <td>{result.totalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
