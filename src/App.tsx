import { useState } from "react"
import GameOver from "./components/game-over"
import QuestionCard from "./components/question-card"
import StartScreen from "./components/start-screen"
import type { GameState } from "./types/quiz"
import { QUESTIONS } from "./data/questions"


function App() {
  const [gameState, setGameState] = useState<GameState>("start")
  
  const handleStart = () => {
    setGameState("playing")
  }

  return (
    <div>
      {gameState === "start" && <StartScreen onStart = {handleStart}/>}
      {gameState === "playing" && <QuestionCard question={QUESTIONS[0]} />}
      {gameState === "end" && <GameOver/>}
    </div>
   
  )
}

export default App
