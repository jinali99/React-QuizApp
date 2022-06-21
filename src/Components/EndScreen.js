import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";

function EndScreen() {
  const { score, setscore, setGameState } = useContext(QuizContext);

  const restart = () => {
    setscore(0);
    setGameState("menu");
  };
  return (
    <div className="endscreen">
      <h1>QUIZ FINISHED</h1>
      <h2>
        {score} / {Questions.length}{" "}
      </h2>
      <button className="restart" onClick={restart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default EndScreen;
