import { createContext, useEffect, useState } from "react";
// import restcountries from "../data/restcountries.json";

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [queNum, setQueNum] = useState(0);
  const [ansCount, setAnsCount] = useState(0);
  const [countryArray, setCountryArray] = useState([]);
  const [questionType, setQuestionType] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://restcountries.com/v2`;
   // useEffect(() => {

  //   /* trial */
  //   startQuizHandler();
  //   // fetchcountriesData();

  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  /* start Quiz */
  const startQuizHandler = () => {
    switchQuestionType();
    fetch(`${url}/all`)
      .then((response) => response.json())
      .then((data) => {
        let countryOptions = [];
        for (let i = 0; i < 3; i++) {
          const idx = Math.floor(Math.random() * data.length);
          countryOptions.push(data[idx].name);
          data.splice(idx, 1);
        }
    
        setCountryArray(
          shuffle(
            data.map((item) => {
              let newItem = {};
              if (item.capital) {
                newItem = {
                  id: item.numericCode,
                  name: item.name,
                  capital: item.capital,
                  flag: item.flag,
                  options: shuffle([item.name, ...countryOptions]),
                };
              }
              return newItem;
            })
          )
        );
      });
    setIsLoading(false);
  };

  /* Switch Que type to capital or flag */
  const switchQuestionType = () => {
    const num = Math.floor(Math.random() * 2);
    switch (num) {
      case 0:
        setQuestionType("capital");
        break;

      case 1:
        setQuestionType("map");
        break;

      default:
        break;
    }
  };

  /* check if ans is correct or not */
  const checkAnswer = (e, name) => {
    setIsSelected(true);
    const target = e.target;
    if (target.textContent === name) {
      setIsCorrect(true);
      setAnsCount(ansCount + 1);
      target.classList.add("correct");
    } else {
      setIsCorrect(false);
      target.classList.add("wrong");
      const allItems = target.closest(".quiz-ans-list").children;
      for (let item of allItems) {
        if (item.textContent === name) {
          item.classList.remove("wrong");
          item.classList.add("correct");
        }
      }
    }
  };

  /* next Question */
  const nextQuestion = () => {
    document
      .querySelectorAll(".quiz-ans-item")
      .forEach((item) => (item.style["pointer-events"] = "auto"));
    setIsSelected(false);
    setIsCorrect(false);
    setQueNum(queNum + 1);
  };

  /* Restart Quiz */
  const restartQuiz = () => {
    setCountryArray([]);
    document
      .querySelectorAll(".quiz-ans-item")
      .forEach((item) => (item.style["pointer-events"] = "auto"));
    setIsSelected(false);
    setIsCorrect(false);
    setQueNum(0);
    setAnsCount(0);
    startQuizHandler();
  };

  return (
    <QuizContext.Provider
      value={{
        isLoading,
        queNum,
        ansCount,
        countryArray,
        questionType,
        isCorrect,
        isSelected,
        startQuizHandler,
        nextQuestion,
        checkAnswer,
        restartQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;

/* shuffle array items */
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
