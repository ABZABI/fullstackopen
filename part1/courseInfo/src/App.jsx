import { useState } from "react";
import { Course } from "./components/Course";

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

  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: "Node.js",
      id: 3,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: "Node.js",
      id: 4,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: "Half Stack application development",
      id: 5,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 12,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-8 p-6">
      <h1 className="text-2xl font-semibold">Web development curriculum</h1>
      <div className="grid grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default App;
