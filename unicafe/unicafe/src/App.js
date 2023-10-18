import { useState } from "react";

const Button = ({ handleClick, value }) => {
  const style = {
    marginRight: "2rem",
  };
  return (
    <button style={style} onClick={handleClick}>
      {value}
    </button>
  );
};

const ClickHistory = ({ allClicks }) => {
  if (allClicks.lenght === 0) {
    return <p>No Feedback was Given</p>;
  }
  return true;
};

const Statistics = ({ text, value }) => {
  // if (allClicks === 0) {
  //   return <p>No Feedback Given</p>;
  const style = {
    width: "40%",
    // border: "1px solid black",
    marginBottom: "1rem",
  };
  const name = { width: "20%" };
  const data = { width: "80%" };
  // }
  return (
    <table style={style}>
      <tbody>
        <tr>
          <td style={name}>{text}:</td>
          <td style={data}>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(false);

  const increaseGoodHandler = () => {
    setAllClicks(true);
    setGood(good + 1);
  };
  const increaseBadHandler = () => {
    setAllClicks(true);
    setBad(bad + 1);
  };
  const increaseNeutralHandler = () => {
    setAllClicks(true);
    setNeutral(neutral + 1);
  };

  const all = good + bad + neutral;
  let average = all / 3;
  const positive = (good / all) * 100;
  const positivePercent = `${positive} %`;

  let Stats =
    allClicks === false ? (
      <div>No Feedback Given</div>
    ) : (
      <div>
        <Statistics text={"Good"} value={good} />
        <Statistics text={"Neutral"} value={neutral} />
        <Statistics text={"Bad"} value={bad} />
        <Statistics text={"Total"} value={all} />
        <Statistics text={"Average"} value={average} />
        <Statistics text={"Positive"} value={positivePercent} />
      </div>
    );

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={increaseGoodHandler} value={"good"} />
      <Button handleClick={increaseNeutralHandler} value={"neutral"} />
      <Button handleClick={increaseBadHandler} value={"bad"} />
      <div>
        <h3>Statistics</h3>
        {Stats}
      </div>
      <ClickHistory allClicks={allClicks} />
    </div>
  );
};

export default App;
