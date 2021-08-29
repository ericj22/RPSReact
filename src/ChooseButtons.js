import React from 'react';
import './ChooseButtons.css';

function ChooseButtons(props) {
    return (
        <div className="ChooseButtons">
            <p className="App-white App-text">Rock, Paper, Scissors!</p>
            <div className="App-break"/>
            <button className="ChooseButtons-ChoiceButton App-text" 
            onClick={props.chooseRock}> 
            Rock! </button>
            <button className="ChooseButtons-ChoiceButton App-text" 
            onClick={props.choosePaper}> 
            Paper! </button>
            <button className="ChooseButtons-ChoiceButton App-text" 
            onClick={props.chooseScissors}> 
            Scissors! </button>
            <div className="App-break"/>
            <p className="App-white">Your choice: {props.choice}</p>
            <div style={{flexBasis: "100%", height: "8vmin"}}/>
        </div>
    )
}

export default ChooseButtons
