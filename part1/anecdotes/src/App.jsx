import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Button = ({ onClick, text }) => {
  return (
    <button
      className="p-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-100 transition duration-500 w-[10rem]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  // console.log(votes);

  // event-handlers
  const handleNextAnecdote = () => {
    const nextAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextAnecdote);
    // console.log(anecdotes[selected], selected);
  };

  const handleAnecdoteVote = () => {
    const voteCopy = { ...votes };
    voteCopy[selected] += 1;
    // console.log(selected);
    // console.log(voteCopy);
    setVotes(voteCopy);
  };

  const indexOfHighVote = () => {
    let max = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > votes[max]) {
        max = i;
      }
    }
    return max;
  };

  const highVote = indexOfHighVote();

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-12 p-12">
      <h1 className="text-2xl font-semibold w-1/3 text-center">
        Random Anecdote from the Field of Software Engineering Generator
      </h1>
      <span className="flex flex-col gap-6 items-center">
        <h1 className="text-lg font-semibold text-center">
          Anecdote of the day
        </h1>
        <div className="w-2/3 border border-gray-200 rounded-xl p-2 px-4 text-center flex flex-col gap-2">
          <span className="text-blue-600">Has {votes[selected]} vote</span>
          <hr />
          <span className="text-lg">{anecdotes[selected]}</span>
        </div>
        <span className="flex gap-4">
          <Button onClick={handleNextAnecdote} text={"Next Anecdote"} />
          <Button onClick={handleAnecdoteVote} text={"Vote"} />
        </span>
      </span>
      <span className="flex flex-col gap-6 items-center">
        <h1 className="text-lg font-semibold text-center">
          Anecdote with most votes
        </h1>
        <div className="w-2/3 border border-gray-200 rounded-xl p-2 px-4 text-center flex flex-col gap-2">
          <span className="text-blue-600">Has {votes[highVote]} vote</span>
          <hr />
          <span className="text-lg">{anecdotes[highVote]}</span>
        </div>
      </span>
    </div>
  );
};

export default App;
