import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "../context/QuizContext";
import { ReactComponent as Winner } from "./assets/undraw_winners.svg";
import Wrapper from "./Wrapper";

const Result = () => {
  const navigate = useNavigate();
  const quizCtx = useContext(QuizContext);
  const { ansCount, restartQuiz } = quizCtx;

  const resetGame = () => {
    restartQuiz();
    navigate("/quiz");
  };

  return (
    <Wrapper>
      <div className="quiz-card result-card">
        <Winner className="winner" />
        <h2>Results</h2>
        <p>
          You got <span className="total-score">{ansCount}</span> correct
          answers
        </p>
        <div>
          <button className="secondary-btn" onClick={resetGame}>
            Try again
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Result;
