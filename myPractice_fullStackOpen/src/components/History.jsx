import React from "react";

export const History = ({ clicks }) => {
  console.log(clicks);

  if (clicks.length === 0) {
    return (
      <div className="bg-gray-100 p-2 rounded-lg flex flex-wrap max-w-3/4">
        the app is used by pressing the buttons
      </div>
    );
  }
  return (
    <div>
      <p className="bg-gray-100 p-2 rounded-lg flex flex-wrap max-w-3/4">
        {clicks.join(" , ")}
      </p>
    </div>
  );
};
