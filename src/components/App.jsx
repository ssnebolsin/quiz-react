import {useState} from "react";
import Store from "../store";
import QuizItem from "./QuizItem.jsx";
function App() {
  let [results, setResults] = useState(0)
  let [currentQuestion, setCurrentQuestion] = useState(0)
  const selectAnswer = (id) => {
    Store.quiz.questions[currentQuestion].correct === id ? setResults(results + 1) : null
    if (currentQuestion < Store.quiz.questions.length) setCurrentQuestion(currentQuestion + 1)
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
          <div className="quiz__progress">
            <div style={{width: currentQuestion / Store.quiz.questions.length * 100 + '%'}} className="quiz__progress-inner"></div>
          </div>
          <section className='quiz__wrap'>
            <QuizItem current={currentQuestion} chooseAnswer={selectAnswer} />
          </section>
        </>
      }
      <section className={`quiz__result ${currentQuestion >= Store.quiz.questions.length ? '--show' : ''}`}>
        <h3 className="quiz__summary">
          Ви відповіли правильно на {results} із {Store.quiz.questions.length} запитаннь
        </h3>
      </section>
    </main>
  )
}
export default App
