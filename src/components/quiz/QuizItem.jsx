import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import QuizContext from "../../context/QuizContext";

const QuizItem = () => {
  const quizCtx = useContext(QuizContext);
  const { queNum, countryArray, checkAnswer, isSelected } = quizCtx;
  const { capital, options, name } = countryArray[queNum];

  return (
    <>
      {capital
        ? options.map((option) => (
            <li
              key={option.toLowerCase().split(" ").join("-")}
              id={option.toLowerCase().split(" ").join("-")}
              onClick={(event) => checkAnswer(event, name)}
              className="quiz-ans-item"
              style={{pointerEvents: isSelected ? 'none' : 'null'}}
            >
              {option}
             {isSelected && <div className="icon"><FaRegCheckCircle className="success"/> <FaRegTimesCircle className="failer" /></div>}
            </li>
          ))
        : null}
    </>
  );
};

export default QuizItem;
