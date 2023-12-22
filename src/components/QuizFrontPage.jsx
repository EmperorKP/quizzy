import { useState, useEffect } from 'react';
import QuestionBox from './QuestionBox';
import './QuizFrontPage.css';

const FrontPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleToggle = () => {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDisplayed) {
      body.style.backgroundColor = '#111111';
      body.style.color = 'white';
      document.getElementById("right-corner-button").style.backgroundColor="#ffcb74"
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      document.getElementById("right-corner-button").style.backgroundColor="#111111"
    }
  }, [isDisplayed]);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const reset = () => {
    setScore(0);
    setQuizStarted(false);
  };

  return (
    <div className="front-page">
      {!quizStarted && (
        <div>
          <button className="dark-mode-btn" id='right-corner-button' onClick={handleToggle}>
            {isDisplayed ? '☀️' : '🌙'}
          </button>
          <h1>Welcome to Quizzy</h1>
          <p>Test your knowledge and have fun!</p>
          <button className="button-49" role="button" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      )}

      {quizStarted && <QuestionBox score={score} setScore={setScore} resetOption={reset} />}
    </div>
  );
};

export default FrontPage;
