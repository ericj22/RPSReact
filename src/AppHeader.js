import React from 'react'
import logo from './logo.svg';
import './AppHeader.css';

function AppHeader() {
    return (
        <div className="App-header">
            <p style={{margin: "0.5em"}} className="App-header-text">
            <img src={logo} className="App-logo" alt="logo" />
            Rock Paper Scissors
            </p>
        </div>
    )
}

export default AppHeader