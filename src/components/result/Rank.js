import React, { useState, useEffect } from "react";
import "./Rank.css";
import axios from "axios";

export default function Rank(props) {
  const { setError, setLoad } = props;

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5171/api/v1/results"
        );

        const sortedResults = response.data.sort(
          (a, b) => b.totalScore - a.totalScore
        );

        sortedResults.forEach((result, index) => {
          result.rank = index + 1;
        });

        setResults(sortedResults);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, []);

  console.log(results)
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
            {results.map((result) => (
              <tr key={result.resultId}>
                <td>{result.rank}</td>
                <td>{result.userId}</td>
                <td>{result.totalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
