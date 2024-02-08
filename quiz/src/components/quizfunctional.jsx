import { useState } from "react";
const Quizpage = (props) => {
  const [index, setIndex] = useState(0);

  // to go to the next question after clicking on the wanted btn
  const toNext = () => {
    let questions = index;
    if (questions === props.Data.length - 1) {
      setIndex(0);
    } else {
      setIndex(questions + 1);
    }
  };

  // to go to the previous question after clicking on the wanted btn
  const toBack = () => {
    let questions = index;

    if (questions === 0) {
      setIndex(props.Data.length - 1);
    } else {
      setIndex(questions - 1);
    }
  };

  // if you want to quit the quiz ...
  const quitbutton = () => {
    let questions = index;
    let toQuit = window.confirm("Are you sure you want to quit?");

    if (toQuit) {
      if (questions === props.Data.length - 1) {
        setIndex(0);
      } else {
        setIndex(questions + 1);
      }
      +6;
    }
  };

  let questions = index;

  return (
    <div className="main">
      <h1>Question</h1>
      <p className="series">{`${questions + 1} of ${
        props.Data.length
      }`}</p>
      <h3 className="ques">{props.Data[questions].question}</h3>
      <div className="option1">
        <p className="btn">{props.Data[questions].optionA}</p>
        <p className="btn">{props.Data[questions].optionB}</p>
      </div>
      <div className="option2">
        <p className="btn">{props.Data[questions].optionC}</p>
        <p className="btn">{props.Data[questions].optionD}</p>
      </div>
      <div className="options">
        <button className="last previous" onClick={toBack}>
          Previous
        </button>
        <button className="last next" onClick={toNext}>
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
