import React from 'react'
import rpslogo from './rpslogo.svg';
import './AppHeader.css';

function AppHeader() {
    return (
        <div className="AppHeader">
            <p style={{margin: "0.5em"}} className="AppHeader-text">
            <img src={rpslogo} className="App-logo" alt="logo" />
            Rock Paper Scissors
            </p>
        </div>
    )
}

export default AppHeader
