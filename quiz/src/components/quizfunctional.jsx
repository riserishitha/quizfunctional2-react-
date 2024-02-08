import { useState } from "react";
const Quizpage = (props) => {
  const [index, setIndex] = useState(0);

  // to go to the next question after clicking on the wanted btn
  const nextbutton = () => {
    let questionNumber = index;
    if (questionNumber === props.Data.length - 1) {
      setIndex(0);
    } else {
      setIndex(questionNumber + 1);
    }
  };

  // to go to the previous question after clicking on the wanted btn
  const prevbutton = () => {
    let questionNumber = index;

    if (questionNumber === 0) {
      setIndex(props.Data.length - 1);
    } else {
      setIndex(questionNumber - 1);
    }
  };

  // if you want to quit the quiz ...
  const quitbutton = () => {
    let questionNumber = index;
    let confirmQuit = window.confirm("Are you sure you want to quit?");

    if (confirmQuit) {
      if (questionNumber === props.Data.length - 1) {
        setIndex(0);
      } else {
        setIndex(questionNumber + 1);
      }
      +6;
    }
  };

  let questionNumber = index;

  return (
    <div className="main">
      <h1>Question</h1>
      <p className="series">{`${questionNumber + 1} of ${
        props.Data.length
      }`}</p>
      <h3 className="ques">{props.Data[questionNumber].question}</h3>
      <div className="option1">
        <p className="btn">{props.Data[questionNumber].optionA}</p>
        <p className="btn">{props.Data[questionNumber].optionB}</p>
      </div>
      <div className="option2">
        <p className="btn">{props.Data[questionNumber].optionC}</p>
        <p className="btn">{props.Data[questionNumber].optionD}</p>
      </div>
      <div className="options">
        <button className="last previous" onClick={prevbutton}>
          Previous
        </button>
        <button className="last next" onClick={nextbutton}>
          Next
        </button>
        <button className="last quit" onClick={quitbutton}>
          Quit
        </button>
      </div>
    </div>
  );
};

export default Quizpage;
