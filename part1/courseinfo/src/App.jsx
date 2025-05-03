import { useState } from "react";
import FullStackOpen from "./FullstackOpenExercise";
const App = (props) => {
  const [counter, setCounter] = useState(0);
  const name = "Peter";
  const age = 10;

  const [value, setValue] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

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

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    console.log(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  const setToValue = (value) => () => {
    return setValue(value);
  };

  const addOne = () => setCounter(counter + 1);

  const minusOne = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const setToZero = () => setCounter(0);

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  console.log("Currently rendering: ", counter);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <p>Here goes another exercise....</p>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button onClick={addOne} text="Add one" />
      <Button onClick={minusOne} text="Minus one" />
      <Button onClick={setToZero} text="Set to Zero" />
      <h3>Another Exercise:</h3>
      <div>
        {left}
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
        {right}
        <p>{allClicks.join(" ")}</p>
        <p>total {total}</p>
        <History allClicks={allClicks} />
      </div>
      <h3>Setting values to chosen::</h3>
      <div>
        <p>{value}</p>
        <button onClick={setToValue(2000)}>Set to 2000</button>
      </div>

      <h1>FullStack Open Exercises:</h1>
      <FullStackOpen />
      <Anecdote anecdotes={anecdotes}></Anecdote>
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((e) => {
        return <Part name={e.name} exercises={e.exercises} />;
      })}
    </>
  );
};

const Total = ({ parts }) => {
  let sum = 0;
  parts.forEach((e) => (sum += e.exercises));

  return (
    <p>
      Number of exercises:
      {sum}
    </p>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>And you were probably born in {bornYear()}</p>
    </div>
  );
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }
  return <div>button press History: {props.allClicks.join(" ")}</div>;
};

const Anecdote = ({anecdotes}) => {

   if (anecdotes.length == 0 || anecdotes == null) {
    return <><h1>ANECDOTES</h1><p>No anecdotes.</p></>;
  }
  const [selectedAnecdote, setSelectedAnecdote] = useState(0);

  const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelectedAnecdote(randomNumber);
  };
  return (
    <>
    <h1>ANECDOTES</h1>
      <p>{anecdotes[selectedAnecdote]}</p>
       
      <button onClick={generateRandomNumber}>Next anecdote!</button>
    </>
  );
};

export default App;
