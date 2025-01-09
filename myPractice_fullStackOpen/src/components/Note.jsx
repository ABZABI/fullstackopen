import React from "react";

export const Course = ({ course }) => {
  return <li>{course.name}</li>;
};

export const Note = ({ note }) => {
  return <li>{note.content}</li>;
};
