const Course = ({ course }) => {
  // const courses = course;
  // const courseName = course.name;
  // const parts = course.parts;

  // const totalEx = parts.reduce((total, part) => {
  //   console.log(total);
  //   return (total += part.exercises);
  // }, 0);
  // console.log(course);
  console.log(course);
  // const totalEx = course.parts.reduce((total, part) => {
  //   return (total += part.exercises);
  // }, 0);

  const courseComponent = course.map((course) => {
    return (
      <div key={course.id}>
        <h1>{course.name}</h1>
        {course.parts.map((part) => {
          return (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          );
        })}
        <h3>
          {" "}
          total of{" "}
          {course.parts.reduce((total, part) => {
            // let tot = (total += part);
            // console.log(total, part);
            return (total += part.exercises);
          }, 0)}{" "}
          exercises
        </h3>
      </div>
    );
  });
  // return <h1>{course[0].name}</h1>;
  return <div>{courseComponent}</div>;
};

export default Course;

/* <h1>{courseName}</h1> */
/* {parts.map((part) => {
        // console.log(typeof part.exercises);
        return (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        );
      })}
      <h3>total of {totalEx} exercises</h3> */
