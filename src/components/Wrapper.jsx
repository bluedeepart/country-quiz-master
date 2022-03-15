import React from "react";
import { Link } from "react-router-dom";

const Wrapper = ({children}) => {
  return (
    <div className="quiz-wrapper">
      <h1>
        <Link to="/">Country Quiz</Link>
      </h1>
      {children}
    </div>
  );
};

export default Wrapper;
