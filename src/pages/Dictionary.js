import React, { useState } from 'react'
import axios from 'axios';
import WordInfo from "../components/wordinfo/WordInfo"
import "./Dictionary.css";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [meaning, setMeaning] = useState(null);

  // doocumentation https://jlpt-vocab-api.vercel.app/

  function handleResponse(response) {
      setMeaning(response.data.words);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://jlpt-vocab-api.vercel.app/api/words?word=${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <div className="dictionary">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <small>type the word you are looking for. ex 夜更かし </small>

        <WordInfo meaning={meaning} />
      </div>
    </div>
  );
}

