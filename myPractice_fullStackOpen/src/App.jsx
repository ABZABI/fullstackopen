import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { History } from "./components/History";
import { Display } from "./components/Display";
import { Course, Note } from "./components/Note";
import { courses } from "./data/CourseData";

const App = () => {
  const [courses, setCourses] = useState(courses);
  console.log(courses);
  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-8 p-6">
      <h1 className="text-2xl font-semibold">Web development curriculum</h1>
      <div className="grid grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col w-full bg-gray-100 p-4 gap-2 rounded-lg justify-between"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">{course.name}</h1>
              <hr />
              <div className="flex gap-8">
                <span className="w-3/5 font-semibold">Course Name</span>
                <span className="w-2/5 font-semibold text-center">
                  Exercises
                </span>
              </div>
              <hr />
              {course.parts.map((part) => (
                <ul key={part.id} className="flex gap-4">
                  <li className="w-3/5">{part.name}</li>
                  <span className="w-2/5 text-center">{part.exercises}</span>
                </ul>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <hr />
              <div className="flex">
                <span className="w-3/5">Total</span>
                <span className="w-2/5 text-center">
                  {course.parts.reduce((exercise, part) => {
                    // console.log(exercise, part.exercises);
                    return (exercise += part.exercises);
                  }, 0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

// const [count, setCount] = useState(0);
// // const [clicks, setClicks] = useState({ left: 0, right: 0 });
// const [left, setLeft] = useState(0);
// const [right, setRight] = useState(0);
// const [allClicks, setAllClicks] = useState([]);
// const [man, setMan] = useState([]);
// const [total, setTotal] = useState(0);
// const [value, setValue] = useState(0);

// //event-handlers
// const increaseCounter = () => {
//   // console.log("Value before", count);
//   setCount(count + 1);
// };
// const decreaseCounter = () => {
//   // console.log("Value before", count);
//   setCount(count - 1);
// };
// const resetCounter = () => {
//   // console.log("Value before", count);
//   setCount(0);
// };

// const handleLeftClick = () => {
//   setAllClicks(allClicks.concat("L"));
//   // console.log("Left before", left);

//   const updatedLeft = left + 1;
//   setLeft(updatedLeft);

//   // console.log("Left after", updatedLeft);
//   setTotal(updatedLeft + right);
// };

// const handleRightClick = () => {
//   setAllClicks(allClicks.concat("R"));
//   // console.log("Right before", right);

//   const updatedRight = right + 1;
//   setRight(updatedRight);

//   // console.log("Right after", updatedRight);
//   setTotal(left + updatedRight);
// };

// const setToValue = (value) => () => {
//   setValue(value);
// };

/* <Display counter={count} />
      <span className="flex gap-4">
        <Button onCLick={increaseCounter} text={"Plus"} />
        <Button onCLick={decreaseCounter} text={"Minus"} />
        <Button onCLick={resetCounter} text={"Zero"} />
      </span> */

/* <div className="flex gap-4">
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
      <p>Total Clicks: {total}</p>*/
