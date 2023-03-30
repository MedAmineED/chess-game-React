import logo from './logo.svg';
import './App.css';
import Table from './gamePage/components/gameComponents/table/Table';
import React from 'react';
import PlayerCardInfo from './gamePage/components/PlayerCardInfo/PlayerCardInfo';
import GameSpace from './gamePage/components/GameSpace';


function App() {
  return (
      <div className="App">
        <GameSpace />
      </div>
    
  );
}

export default App;
