import React,{ useState,useRef } from 'react'

import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Rule from './components/rule'

function App() {

  const [startGame ,setStartGame] = useState(false)
  const [totalCards,setTotalCards] = useState(0)

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
  const endGame = () => {
    setStartGame('end')
  }
  return (
    <div className="App">
       <Header /> 
      {!startGame && <Rule startGame={start} prop={form} />}
      {startGame && <Main totalCards={totalCards} endGame={endGame}/> }
      {startGame === 'end' && <p>you lose to win</p>}
       <Footer />
    </div>
  );
}

export default App;
