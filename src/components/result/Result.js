import React, { useState } from 'react'

export default function Result(props) {
const {score} = props
  const [result, setResult] = uuseState(0)(
    {
      result: "",
      speed: "",
    } // what else info I need?
)

  return (
    <div className='resultCon'>
      <div className="score">
        <h4>
                  Your Score: {score}/10
        </h4>
        {/* <button className="rest" onClick={() => window.location.reload()}>
          Restart
        </button> */}
      </div>
    </div>
  );
}

