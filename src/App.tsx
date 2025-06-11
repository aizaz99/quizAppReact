import { useEffect, useState } from "react"
import GameOver from "./components/game-over"
import QuestionCard from "./components/question-card"
import StartScreen from "./components/start-screen"
import type { GameState } from "./types/quiz"
import { QUESTIONS } from "./data/questions"
import Timer from "./components/timer"


function App() {
  const [gameState, setGameState] = useState<GameState>("start")
  const [selectedAnswer, setSelectedAnswer] = useState<number | null> (null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
     const [timerLeft, setTimerLeft] = useState<number>(30);

     useEffect(()=>{
      let timer: number;
      if(gameState === "playing" && timerLeft > 0) {
        timer = setInterval(()=> {
          setTimerLeft((prev) => prev -1);
        }, 1000)
       
      } else if (timerLeft === 0 && gameState === "playing"){
        setGameState("end")

      }
       return () => clearInterval(timer);
      
     }, [timerLeft, gameState])
  
  const handleStart = () => {
    setGameState("playing")
    setTimerLeft(10);
    setScore(0);
  }

  const handleAnswer = (index:number):void => {

    setSelectedAnswer(index)
    const isCorrect = index === QUESTIONS[currentQuestion].correct;

    if(isCorrect){
      setScore((prev)=> +1)
    }
    setTimeout(() => {
      if(currentQuestion< QUESTIONS.length-1) {
    setCurrentQuestion((prev)=> prev +1)
    setSelectedAnswer(null);
      } else{
        setGameState("end")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {gameState === "start" && <StartScreen onStart = {handleStart}/>}
      {gameState === "playing" && (
        <div className="p-8">
          <Timer timerLeft={timerLeft}/>
        <QuestionCard question={QUESTIONS[currentQuestion]} onAnswerSelect={handleAnswer} selectedAnswer = {selectedAnswer} totalQuestions={QUESTIONS.length} currentQuestion = {currentQuestion}/>
         <div className="mt-6 text-center text-gray-600">
              Score: {score}/{QUESTIONS.length}
            </div>
        </div>)}
      {gameState === "end" && <GameOver score={score} totalQuestions={QUESTIONS.length} onRestart={handleStart}/>}
      
      </div>
    </div>
   
  )
}

export default App
