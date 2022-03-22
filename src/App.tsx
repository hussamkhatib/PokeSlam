import React, { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Rule from './components/Rule';
import Finish from './components/Finish';

enum game {
  home,
  start,
  end,
}

function App() {
  const [startGame, setStartGame] = useState<game>(game.home);
  const [totalCards, setTotalCards] = useState(3);
  const [winOrLose, setWinOrLose] = useState(undefined);

  const handleChange = (e: any) => {
    setTotalCards(e.target.value);
  };

  const start = (e: any) => {
    e.preventDefault();
    setStartGame(game.start);
  };
  const endGame = (param: any) => {
    setStartGame(game.end);
    setWinOrLose(param);
  };

  const reset = () => {
    setStartGame(game.home);
  };

  return (
    <div className="App">
      <Header />
      {startGame === game.home && (
        <Rule startGame={start} handleChange={handleChange} totalCards={totalCards} />
      )}
      {startGame === game.start && <Main totalCards={totalCards} endGame={endGame} />}
      {startGame === game.end && <Finish WinOrLose={winOrLose} Reset={reset} />}
    </div>
  );
}

export default App;
