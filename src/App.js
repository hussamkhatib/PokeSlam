import React,{ useState,useRef } from 'react'

import Header from './components/header'
import Main from './components/main'
import Rule from './components/rule'
import Finish from './components/finish'

function App() {

  const [startGame ,setStartGame] = useState(false)
  const [totalCards,setTotalCards] = useState(0)
  const [winOrLose,setWinOrLose] = useState(undefined)
  const form = useRef(null)
  const start = (e) => {
    e.preventDefault()
    var data = new FormData(form.current);
    let output = ''
    for (const entry of data) {
         output = entry[1];
    };
    setStartGame(true)
    setTotalCards(output)
  }
  const endGame = (param) => {
    setStartGame('end')
    setWinOrLose(param)
  }

  const reset = () => {
   setStartGame(false) 
  }

  return (
    <div className="App">
       <Header /> 
      {!startGame && <Rule startGame={start} prop={form} />}
      {(startGame && startGame !== 'end') && <Main totalCards={totalCards} endGame={endGame}/>  }
      {startGame === 'end' && <Finish WinOrLose={winOrLose} Reset={reset}/>}
    </div>
  );
}

export default App;
