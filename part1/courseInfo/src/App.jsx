import { useState } from "react";

const Header = (props) => {
  // console.log(props);
  return <h1 className="font-bold text-2xl mb-4">{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  // console.log(props);
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  // const course = "Half Stack Application Development";
  // const part1 = "Fundamentals of React";
  // const exercise1 = 10;
  // const part2 = "Using props to pass data";
  // const exercise2 = 7;
  // const part3 = "State of a component";
  // const exercise3 = 14;
  //setTimeout(() => setCounter(counter + 1), 1000);
  // console.log("rendering", counter);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div className="p-24 flex flex-col items-start gap-4">
      <Header course={course.name} />
      <hr />
      <Content parts={course.parts} />
      <hr />
      <Total parts={course.parts} />
      <span className="flex flex-col gap-2 border border-gray-200 p-2 rounded-lg">
        <div>Counter: {counter}</div>
        <button
          onClick={handleClick}
          className="border border-gray-400 p-1 px-6 rounded-lg hover:bg-gray-100 transition duration-400"
        >
          Plus
        </button>
      </span>
    </div>
  );
};

export default App;
