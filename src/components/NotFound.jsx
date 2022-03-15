import { Link } from "react-router-dom";
import { ReactComponent as Error } from "./assets/404-error-bro.svg";
import ImgCredit from "./ImgCredit";

const NotFound = () => {
  return (
    <>
      <div className="quiz-card not-found-card">
        <Error className="not-found-svg" />
        <div>
          <button className="secondary-btn" style={{ padding: 0 }}>
            <Link to="/" style={{ padding: "18px 60px", display: 'block' }}>
              Back to Home
            </Link>
          </button>
        </div>
      </div>

      <ImgCredit />
    </>
  );
};

export default NotFound;
