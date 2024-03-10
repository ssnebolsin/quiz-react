import Store from "../store/index.js";

function QuizResult({results, show, reload}){
    return(
        <section className={`quiz__result ${show}`}>
            <h3 className="quiz__summary">
                Ви відповіли правильно на {results} із {Store.quiz.questions.length} запитаннь
            </h3>
            <button className="quiz__result-btn" onClick={()=>{reload()}}>
                Спробувати ще
            </button>
        </section>
    )

}

export default QuizResult