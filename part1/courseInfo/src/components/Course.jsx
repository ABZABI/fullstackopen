import React from "react";

const Header = ({ name }) => {
  // console.log(props);
  return <h1 className="text-lg font-semibold">{name}</h1>;
};

const Part = ({ course }) => {
  return (
    <div className="flex flex-col gap-2">
      {course.parts.map((part) => (
        <ul key={part.id} className="flex gap-4">
          <li className="w-3/5">{part.name}</li>
          <span className="w-2/5 text-center">{part.exercises}</span>
        </ul>
      ))}
    </div>
  );
};

const Content = ({ course }) => {
  // console.log(course);
  return (
    <div className="flex flex-col gap-2">
      <Header name={course.name} />
      <hr />
      <div className="flex gap-8">
        <span className="w-3/5 font-semibold">Course Name</span>
        <span className="w-2/5 font-semibold text-center">Exercises</span>
      </div>
      <hr />
      <Part course={course} />
    </div>
  );
};

const Total = ({ course }) => {
  return (
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
  );
};

export const Course = ({ course }) => {
  return (
    <div className="flex flex-col w-full bg-gray-100 p-4 gap-2 rounded-lg justify-between">
      <div className="flex flex-col gap-2">
        <Content course={course} />
      </div>
      <Total course={course} />
      {/* <span className="flex flex-col gap-2 border border-gray-200 p-2 rounded-lg">
        <div>Counter: {counter}</div>
        <button
          onClick={handleClick}
          className="border border-gray-400 p-1 px-6 rounded-lg hover:bg-gray-100 transition duration-400"
        >
          Plus
        </button>
      </span> */}
    </div>
  );
};
