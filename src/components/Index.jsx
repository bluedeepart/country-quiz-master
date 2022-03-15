import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import QuizContext from "../context/QuizContext";
import { ReactComponent as Adventure } from "./assets/undraw_adventure.svg";
import { ReactComponent as OnlineTest } from "./assets/online-test-bro.svg";
import Wrapper from "./Wrapper";
import ImgCredit from "./ImgCredit";

const Index = () => {
  const quiCtx = useContext(QuizContext);
  const { startQuizHandler } = quiCtx;

  const navigate = useNavigate();

  const startQuiz = () => {
    startQuizHandler();
    navigate("/quiz");
  };

  return (
    <Wrapper>
      <div className="quiz-card intro-card">
        <Adventure className="adventure" />
        <OnlineTest className="welcome-svg" />
        <h3 style={{ fontWeight: "normal", textAlign: "center" }}>
          Test your knowledge about <strong>countries</strong>, their{" "}
          <strong>capitals</strong> and <strong>flags</strong>
        </h3>
        <div style={{ textAlign: "center" }}>
          <button onClick={startQuiz} className="primary-btn">
            Start Quiz
          </button>
        </div>
      </div>

      <ImgCredit />
    </Wrapper>
  );
};

export default Index;
