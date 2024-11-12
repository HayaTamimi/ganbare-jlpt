import React from "react";
import "./WordInfo.css";

export default function WordInfo(props) {
const { meaning } = props;
//   console.log(meaning[0].word);

  if (props.meaning) {
    return (
        <div className="word-info">
          <div className="row">
            <div className="col">
              <h5 className="jp-word">{meaning[0].word}</h5>
              <h6 className="means">{meaning[0].meaning}</h6>
              <div className="col d-flex justify-content-between">
                <p className="reading">reading: {meaning[0].furigana}</p>
                <p className="lvl">N{meaning[0].level}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
      return null;
  }
}
