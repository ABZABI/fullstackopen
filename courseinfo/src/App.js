import Course from "./components/Course";

const App = () => {
  const course = [
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
  ];

  return <Course course={course} />;
};

export default App;

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   const courseName = [...course.name];
//   const courseParts = [...course.parts];
//   const courseArr = [...course.name, ...course.parts];

//   const Header = (props) => {
//     return <div>{props.courseName}</div>;
//   };

//   const Part = (props) => {
//     return (
//       <p>
//         {props.part} {props.ex}
//       </p>
//     );
//   };
//   const Total = (props) => {
//     return <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>;
//   };

//   return (
//     <div>
//       <Header courseName={courseName} />
//       <Part part={courseParts[0].name} ex={courseParts[0].exercises} />
//       <Part part={courseParts[1].name} ex={courseParts[1].exercises} />
//       <Part part={courseParts[2].name} ex={courseParts[2].exercises} />
//       <Total
//         ex1={courseParts[0].exercises}
//         ex2={courseParts[1].exercises}
//         ex3={courseParts[2].exercises}
//       />
//     </div>
//   );
// };

// export default App;
