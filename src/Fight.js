import React from 'react'
import './Fight.css';

function Fight(props) {
    return (
        <div className="Fight">
            <button className="Fight-BiggerButton App-text"
            onClick={props.updateFight}> Shoot!
            </button>
            <div className="App-break" />
            {props.compChoice!==false && 
            <p className="App-white">Computer choice: {props.compChoice}</p>}
            <div className="App-break" />
            {props.results!==false &&
            <p className="App-white">Result:</p>}
            <div className="App-break" />
            <p className="App-white">{props.results}</p>
            <div className="App-break" />
            {props.results!==false &&
            <div className="Restart-button">
                <button
                className="Fight-BiggerButton App-text"
                onClick={props.restart}>
                    Play again
                </button>
            </div>}
        </div>
    )
}

export default Fight
