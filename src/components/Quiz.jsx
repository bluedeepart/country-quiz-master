import { ReactComponent as Adventure } from "./assets/undraw_adventure.svg";
import { useContext } from "react";
import Loading from "./Loading";
import Question from "./Question";
import QuizList from "./quiz/QuizList";
import QuizContext from "../context/QuizContext";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

const Quiz = () => {
  const navigate = useNavigate();
  const quizCtx = useContext(QuizContext);
  const {
    queNum,
    ansCount,
    countryArray,
    questionType,
    nextQuestion,
    isSelected,
    isCorrect,
  } = quizCtx;

  const nextStepHandler = () => {
    nextQuestion();
    if (isCorrect) {
      nextQuestion();
    } else {
      navigate("/result");
    }
  };

  return (
    <Wrapper>
      {countryArray.length !== 0 ? (
        <>
          <div className="quiz-card">
            <Adventure className="adventure" />

            <Question
              type={questionType}
              question={countryArray}
              queNum={queNum}
            />

            <QuizList />

            {isSelected && (
              <div style={{ textAlign: "right" }}>
                <button className="primary-btn" onClick={nextStepHandler}>
                  Next
                </button>
              </div>
            )}
          </div>
          <div className="score-preview">
            <div>Correct Answer(s): {ansCount}</div>
            {isCorrect ? (
              <div>
                <button className="info-btn">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to={`/${countryArray[queNum].name.split(" ").join("-")}`}
                  >
                   <span className="icon">&#8505;</span> Know More
                  </Link>
                </button>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <div className="quiz-card loading-card">
          <Adventure className="adventure" />
          <Loading />
        </div>
      )}
    </Wrapper>
  );
};

export default Quiz;
