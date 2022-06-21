import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button
        className="btn"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        {" "}
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
