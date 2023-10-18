import { useState } from "react";

const Button = ({ handleClick, value }) => {
  return <button onClick={handleClick}>{value}</button>;
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState();

  const nextAnecdoteHandler = (max) => {
    const index = Math.floor(Math.random() * max);
    setSelected(index);
  };

  const voteHandler = () => {
    setVote(vote + 1);
  };

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>{vote}</div>
      <Button handleClick={voteHandler} value={"vote"} />
      <Button
        handleClick={() => nextAnecdoteHandler(anecdotes.length - 1)}
        value={"next anecdote"}
      />
    </div>
  );
};

export default App;