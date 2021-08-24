import React, { useState } from 'react';
import './App.css';
import AppHeader from './AppHeader.js';
import DisplayScore from './DisplayScore.js';
import ChooseButtons from './ChooseButtons.js';

function App() {
  const [user, setUser] = useState(0);
  const [computer, setComputer] = useState(0);
  const [userChoice, setUserChoice] = useState('None');
  const [freeze, setFreeze] = useState(false);
  const [compChoice, setCompChoice] = useState(false);
  const [results, setResults] = useState(false);

  const chooseRock = () => {
    if(!freeze) setUserChoice('Rock');
  }
  const choosePaper = () => {
    if(!freeze) setUserChoice('Paper');
  }
  const chooseScissors = () => {
    if(!freeze) setUserChoice('Scissors');
  }

  const updateFight = () => {
    if(!freeze) {
      const choices = ['Rock', 'Paper', 'Scissors'];
      let cc = choices[Math.floor(Math.random()*3)];
      let uc = userChoice;
      if((cc==='Rock' && uc==='Scissors') || (cc==='Scissors' && uc==='Paper') || (cc==='Paper' && uc==='Rock')) {
        setResults('Computer wins!');
        setComputer((computer) => computer+1);
      }
      else if((uc==='Rock' && cc==='Scissors') || (uc==='Scissors' && cc==='Paper') || (uc==='Paper' && cc==='Rock')) {
        setResults('You win!');
        setUser((user) => user+1);
      }
      else {
        setResults('Tie');
      }
      setFreeze(true);
      setCompChoice(cc);
    }
  }

  const restart = () => {
    setCompChoice(false);
    setResults(false);
    setFreeze(false);
    setUserChoice('None');
  }

  return (
    <div className="App">
      <AppHeader />
      <DisplayScore user={user} computer={computer}/>
      <ChooseButtons 
      choice={userChoice}
      freeze={freeze}
      chooseRock={chooseRock}
      choosePaper={choosePaper}
      chooseScissors={chooseScissors}
      />
    </div>
  );
}

export default App;
