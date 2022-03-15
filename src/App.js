import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./components/Result";
import Footer from "./layout/Footer";
import { QuizContextProvider } from "./context/QuizContext";
import Index from "./components/Index";
import Quiz from "./components/Quiz";
import NotFound from "./components/NotFound";
import CountryInfo from "./components/CountryInfo";

function App() {
  return (
    <QuizContextProvider>
      <Router basename="/country-quiz-master">
        
          <Routes>
            <Route path="/">
              <Route index path="/" element={<Index />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="result" element={<Result />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/:countryInfo" element={<CountryInfo />} />
          </Routes>
        <Footer />
      </Router>
    </QuizContextProvider>
  );
}

export default App;
