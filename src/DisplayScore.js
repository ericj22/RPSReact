import React from 'react'
import './DisplayScore.css';

function DisplayScore(props) {
    return (
        <div className="App-header">
            <p style={{margin: "1em"}} className="white">
            Score: {props.user}-{props.computer}</p>
        </div>
    )
}

export default DisplayScore
