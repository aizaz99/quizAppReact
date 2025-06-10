import { useState } from "react"
import GameOver from "./components/game-over"
import QuestionCard from "./components/question-card"
import StartScreen from "./components/start-screen"
import type { GameState } from "./types/quiz"
import { QUESTIONS } from "./data/questions"


function App() {
  const [gameState, setGameState] = useState<GameState>("start")
  const [selectedAnswer, setSelectedAnswer] = useState<number | null> (null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  
  const handleStart = () => {
    setGameState("playing")
  }

  const handleAnswer = (index:number):void => {
    setSelectedAnswer(index)
    setCurrentQuestion((prev)=> prev +1)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {gameState === "start" && <StartScreen onStart = {handleStart}/>}
      {gameState === "playing" && (
        <div className="p-8">
        <QuestionCard question={QUESTIONS[currentQuestion]} onAnswerSelect={handleAnswer} selectedAnswer = {selectedAnswer} totalQuestions={QUESTIONS.length} currentQuestion = {currentQuestion}/>
        </div>)}
      {gameState === "end" && <GameOver/>}
      
      </div>
    </div>
   
  )
}

export default App
