import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";

function Quiz() {
  const { score, setscore , setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [option, setoption] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === option) {
      setscore(score + 1);
    }
  
    setCurrQuestion(currQuestion + 1);
  };

  const finish = () => {
    if (Questions[currQuestion].answer === option) {
      setscore(score + 1);
    }
    setGameState("endscreen")
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>

      <div className="options">
        <button onClick={() => setoption("A")}>
          {Questions[currQuestion].optionA}{" "}
        </button>

        <button onClick={() => setoption("B")}>
          {Questions[currQuestion].optionB}{" "}
        </button>

        <button onClick={() => setoption("C")}>
          {Questions[currQuestion].optionC}{" "}
        </button>

        <button onClick={() => setoption("D")}>
          {Questions[currQuestion].optionD}{" "}
        </button>
      </div>

      {currQuestion == Questions.length - 1 ? (
        <button onClick={finish}>FINISH QUIZ </button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
