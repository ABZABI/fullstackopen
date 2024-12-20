import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { History } from "./components/History";
import { Display } from "./components/Display";

const App = () => {
  const [count, setCount] = useState(0);
  // const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [man, setMan] = useState([]);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);

  //event-handlers
  const increaseCounter = () => {
    // console.log("Value before", count);
    setCount(count + 1);
  };
  const decreaseCounter = () => {
    // console.log("Value before", count);
    setCount(count - 1);
  };
  const resetCounter = () => {
    // console.log("Value before", count);
    setCount(0);
  };

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    // console.log("Left before", left);

    const updatedLeft = left + 1;
    setLeft(updatedLeft);

    // console.log("Left after", updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    // console.log("Right before", right);

    const updatedRight = right + 1;
    setRight(updatedRight);

    // console.log("Right after", updatedRight);
    setTotal(left + updatedRight);
  };

  const setToValue = (value) => () => {
    setValue(value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-24">
      {/* <Display counter={count} />
      <span className="flex gap-4">
        <Button onCLick={increaseCounter} text={"Plus"} />
        <Button onCLick={decreaseCounter} text={"Minus"} />
        <Button onCLick={resetCounter} text={"Zero"} />
      </span> */}
      <div className="flex gap-4">
        <span className="flex flex-col items-center justify center gap-2">
          <div>{left}</div>
          <Button onCLick={handleLeftClick} text={"Left"} />
          <div>man </div>
        </span>
        <span className="flex flex-col items-center justify center gap-2">
          <div>{right}</div>
          <Button onCLick={handleRightClick} text={"Right"} />
        </span>
        <span className="flex flex-col gap-4">
          <Display counter={value} />
          <Button onCLick={setToValue(1000)} text={"Thousand"} />
          <Button onCLick={setToValue(0)} text={"Reset"} />
          <Button onCLick={setToValue(value + 1)} text={"Increment"} />
        </span>
      </div>
      <History clicks={allClicks} />
      <p>Total Clicks: {total}</p>
    </div>
  );
};

export default App;
