const Question = ({ type, question, queNum }) => {
  const { capital, flag } = question[queNum];
  return (
    <>
      {type === "capital" ? (
        <div className="quiz-question">
          <h3>{capital} is the capital of</h3>
        </div>
      ) : (
        <div className="quiz-question">
          <div className="country-map">
            <img src={flag} alt="Flag" />
          </div>
          <h3>Which country does this flag belong to? </h3>
        </div>
      )}
      {/* <div>Ans: {question[queNum].name}</div> */}
    </>
  );
};

export default Question;
