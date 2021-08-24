import React from 'react';
import './ChooseButtons.css';

function ChooseButtons(props) {
    return (
        <div className="Buttons">
            <p className="white text">Rock, Paper, Scissors!</p>
            <div className="break"/>
            <button className="Choice-button text" 
            onClick={props.chooseRock}> 
            Rock! </button>
            <button className="Choice-button text" 
            onClick={props.choosePaper}> 
            Paper! </button>
            <button className="Choice-button text" 
            onClick={props.chooseScissors}> 
            Scissors! </button>
            <div className="break"/>
            <p className="white">Your choice: {props.choice}</p>
            <div style={{flexBasis: "100%", height: "8vmin"}}/>
        </div>
    )
}

export default ChooseButtons
