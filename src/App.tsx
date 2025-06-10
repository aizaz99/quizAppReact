import { useState } from "react"
import GameOver from "./components/game-over"
import QuestionCard from "./components/question-card"
import StartScreen from "./components/start-screen"
import type { GameState } from "./types/quiz"


function App() {
  const [gameState, setGameState] = useState<GameState>("start")
  
  const handleStart = () => {
    setGameState("playing")
  }

  return (
    <div>
      {gameState === "start" && <StartScreen onStart = {handleStart}/>}
      {gameState === "playing" && <QuestionCard/>}
      {gameState === "end" && <GameOver/>}
    </div>
   
  )
}

export default App
