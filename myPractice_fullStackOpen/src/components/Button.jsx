import React from "react";

export const Button = ({ onCLick, text }) => {
  return (
    <button
      className="p-2 px-4 rounded-lg w-fit border border-gray-200 hover:bg-gray-100 transition duration-500"
      onClick={onCLick}
    >
      {text}
    </button>
  );
};
