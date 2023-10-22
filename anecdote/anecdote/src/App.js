import { useState } from "react";

const Button = ({ handleClick, value }) => {
  return <button onClick={handleClick}>{value}</button>;
};
const App = () => {
  const [selected, setSelected] = useState(0);
  // const [vote, setVote] = useState(0);
  const [anecdotes, setAnecdotes] = useState([
    {
      anecdote: "If it hurts, do it more often.",
      vote: 0,
    },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },
    { anecdote: "Premature optimization is the root of all evil.", vote: 0 },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      vote: 0,
    },
    { anecdote: "The only way to go fast, is to go well.", vote: 0 },
  ]);

  const nextAnecdoteHandler = (max) => {
    const index = Math.floor(Math.random() * max);
    setSelected(index);
  };

  const voteHandler = () => {
    const newAnecdotes = [...anecdotes]; //copy of state
    // console.log(newAnecdotes);
    const selectedAnecdote = newAnecdotes[selected]; //selected state
    // console.log(selectedAnecdote);
    const newVote = selectedAnecdote.vote + 1; //increased vote
    selectedAnecdote.vote = newVote;
    console.log(selectedAnecdote, selectedAnecdote.vote);

    setAnecdotes([...newAnecdotes, selectedAnecdote]);
  };

  const highestVotedAnecdoteHandler = () => {
    // const newAnecdote = [...anecdotes];
    // console.log(newAnecdote);
    let highVote = anecdotes[0];
    for (const anecdote of anecdotes) {
      if (highVote.vote < anecdote.vote) {
        highVote = anecdote;
        console.log(highVote);
      }
    }

    console.log(highVote);
    return (
      <div>
        <p>{highVote.anecdote}</p>
        <p>{`has ${highVote.vote} ${
          highVote.vote === 1 ? "vote" : "votes"
        }`}</p>
      </div>
    );
  };

  let vote = highestVotedAnecdoteHandler();
  return (
    <div>
      <div>{anecdotes[selected].anecdote}</div>
      <div>{`has ${anecdotes[selected].vote} ${
        anecdotes[selected].vote === 1 ? "vote" : "votes"
      }`}</div>
      <Button handleClick={voteHandler} value={"vote"} />
      <Button
        handleClick={() => nextAnecdoteHandler(anecdotes.length - 1)}
        value={"next anecdote"}
      />
      <h1>Anecdote with most votes</h1>
      {/* <div>{highVoted}</div> */}
      <Button
        handleClick={highestVotedAnecdoteHandler}
        value={"show highest vote"}
      />
      <div>{vote}</div>
    </div>
  );
};

export default App;
