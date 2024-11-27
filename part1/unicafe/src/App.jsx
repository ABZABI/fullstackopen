import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Button = ({ handleClick, text }) => {
  return (
    <button
      className="p-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-100 transition duration-500 w-[8rem]"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

const Display = ({ content }) => {
  return <p className="break-all text-center">{content}</p>;
};

const StaticLine = ({ text, value }) => {
  return (
    <span className="p-2 px-4 border border-gray-200 rounded-lg flex flex-col gap-2 items-center w-[8rem]">
      <p>{text}</p>
      <hr className="w-full h-1" />
      <Display content={value} />
    </span>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (!good && !neutral && !average) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Statistics</h1>
        <div className="p-2 py-4 bg-red-600 w-[20rem] text-center text-white rounded-lg mt-6">
          No feedback given <br />
          Click one of the buttons above to respond
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-semibold">Statistics</h1>
      <span className="flex gap-6">
        <StaticLine text={"Good"} value={good} />
        <StaticLine text={"Neutral"} value={neutral} />
        <StaticLine text={"Bad"} value={bad} />
        <StaticLine text={"All"} value={all} />
        <StaticLine text={"Average"} value={average} />
        <StaticLine text={"Positive"} value={positive} />
      </span>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedback, setAllFeedback] = useState(0);
  const [feedbackAverage, setFeedbackAverage] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  //event handlers
  const handleGoodClicks = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);

    const updatedAllFeedback = updatedGood + neutral + bad;
    setAllFeedback(updatedAllFeedback);

    // console.log("updatedGood - bad", updatedGood - bad, updatedAllFeedback);
    setFeedbackAverage(((updatedGood - bad) / updatedAllFeedback).toFixed(4));

    const updatedPositiveFeedback = (
      (updatedGood / updatedAllFeedback) *
      100
    ).toFixed(4);
    setPositiveFeedback(updatedPositiveFeedback);
  };

  const handleNeutralClicks = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);

    const updatedAllFeedback = good + updatedNeutral + bad;
    setAllFeedback(updatedAllFeedback);

    const updatedPositiveFeedback = ((good / updatedAllFeedback) * 100).toFixed(
      4
    );
    setPositiveFeedback(updatedPositiveFeedback);
  };

  const handleBadClicks = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);

    const updatedAllFeedback = good + neutral + updatedBad;
    setAllFeedback(updatedAllFeedback);

    // console.log("good - updatedBad", good - updatedBad, updatedAllFeedback);
    setFeedbackAverage(((good - updatedBad) / updatedAllFeedback).toFixed(4));

    const updatedPositiveFeedback = ((good / updatedAllFeedback) * 100).toFixed(
      4
    );
    setPositiveFeedback(updatedPositiveFeedback);
  };

  const handleClearStats = () => {
    setAllFeedback(0);
    setGood(0);
    setBad(0);
    setNeutral(0);
    setFeedbackAverage(0);
    setPositiveFeedback(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full justify-center gap-8">
      <h1 className="text-2xl font-semibold">Unicafe App</h1>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-xl font-semibold">Give Feedback</h1>
        <span className="flex gap-6">
          <Button text={"Good"} handleClick={handleGoodClicks} />
          <Button text={"Neutral"} handleClick={handleNeutralClicks} />
          <Button text={"Bad"} handleClick={handleBadClicks} />
          <Button text={"Clear Stats"} handleClick={handleClearStats} />
        </span>
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          all={allFeedback}
          average={feedbackAverage}
          positive={positiveFeedback}
        />
      </div>
    </div>
  );
};

export default App;
