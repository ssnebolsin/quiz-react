import {useState} from "react";
import Store from "../store";
import QuizItem from "./QuizItem.jsx";
import QuizProgress from "./QuizProgress.jsx";
import QuizResult from "./QuizResult.jsx";

function App() {
  let [results, setResults] = useState(0)
  let [currentQuestion, setCurrentQuestion] = useState(0)

  const selectAnswer = (id) => {
    Store.quiz.questions[currentQuestion].correct === id ? setResults(results + 1) : null
    if (currentQuestion < Store.quiz.questions.length) setCurrentQuestion(currentQuestion + 1)
  }

  const reloadPage = ()=>{
    window.location.reload()
  }

  return (
    <main className='quiz'>
      {
        currentQuestion < Store.quiz.questions.length
        &&
        <>
          <h1 className='quiz__title'>
            {Store.quiz.title}
          </h1>
            <QuizProgress currentWidth={currentQuestion / Store.quiz.questions.length * 100 + '%'}/>
          <section className='quiz__wrap'>
            <QuizItem current={currentQuestion} chooseAnswer={selectAnswer} />
          </section>
        </>
      }
      <QuizResult results={results} currentQuestion={currentQuestion} show={currentQuestion >= Store.quiz.questions.length ? '--show' : ''} reload={reloadPage}/>
    </main>
  )
}
export default App
