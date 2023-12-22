import  { useState, useEffect } from 'react';
import questions from './question';
import './QuestionBox.css';
import Result from './Result';


export default function QuestionBox() {
  const [questionState, setQuestionState] = useState(0);// This is to intialise the question number and a fucntion to increment the question
  const [isDisplayed, setIsDisplayed] = useState(false);// This is to toggle the dark Mode 
  const[score, setScore] = useState(0); // This is to initialise the score and a function to increment the score

  const handleToggle = () => {
    setIsDisplayed((state) => !state); // On clicking the handleToggle, the setIsDisplayed will change is isDisplayed will change either true or false
  };

  const moveNextQuestion = (isCorrect) => { // This function takes a argurment isCorrect, which is a object in question data. 
    if (isCorrect) { // In this line, If the isCorrect is true, then the score is score+1
      setScore(score+1)
    } 
    setQuestionState(questionState+1); // The question numbe is also incremented by 1.
  };

  
  useEffect(() => {
    const body = document.querySelector('body'); // This function is triggered to change the background color when there is change in the isDisplayed variable
    if (isDisplayed) {
      body.style.backgroundColor = '#111111' ;
      body.style.color = 'white'
      document.querySelector('.question-modal').style.backgroundColor = '#f6f6f6';
      document.querySelector('.question-modal').style.color = 'black';
  

   
      
    } else {
      body.style.backgroundColor = 'white' ;
      body.style.color = 'black'
      document.querySelector('.question-modal').style.backgroundColor = 'black';

 
    }
  }, [isDisplayed]);

 
  const reset = () => { // This fucntion is to reset the score and question number to zero
      setScore(0)
        setQuestionState(0)
  }
  const toggleHighLight = () =>{ // This fucntion is to change the question color
      document.getElementsByClassName('highOne')[0].classList.add('highLighter')
  }
  const untoggleHighLight = () =>{ // This function is to change back to its original color
    document.getElementsByClassName('highOne')[0].classList.remove('highLighter')
}

  return (
    
    
    <div id="main-div">
      <div className="nav-bar">
        <span>quizzy</span>
        <button className="dark-mode-btn"onClick={handleToggle}>
         {isDisplayed ? '☀️' : '🌙'}
        </button>
      </div>
      {questionState < questions.length ? (
        <div className="question-modal">
          <div className="Question-container">
            <div id="questions" >
              <p>Question: {questionState+1} out of 5</p>
              <h3 className='highOne'>{questions[questionState].text}</h3>
            </div>
            <div id="options-div">
              {questions[questionState].options.map((el, index) => (  //This function will create as many as buttons in the dom tree with the number of id in the options
                <button key={index} onClick={() => moveNextQuestion(el.isCorrect)}>
                  {el.text}
                </button>
              ))}
            </div>
            <div className="highlight-btn-div">
              <button onClick={toggleHighLight} >highlight</button> 
              {/* This function will change the highlight color */}
              <button onClick={untoggleHighLight} id='highOne'>Remove Highlight</button> {/* This fucntion will change its to the original color */}
            </div>
          </div>
        </div>
      ) : (
        <Result score={score} resetOption={reset}/>
      )}
    </div>
  );
}
