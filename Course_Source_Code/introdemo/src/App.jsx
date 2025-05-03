const App = () => {
  const now = new Date();
  let a = 20;
  let b = 40;
  console.log(now, a + b);
  console.log("Hello from component");
  return (
    <div>
      <Hello name="Wolfy" age={23} />
      <Hello name="Espiritu" />
      <Hello name="Amanita" />
      <SumParams a={32} b={14} />
      <p>
        {a} plus {b} is {a + b} lol{" "}
      </p>
    </div>
  );
};

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
      {props.age != undefined ? <p>You are {props.age} years old.</p> : null}
    </div>
  );
};

const SumParams = ({ props, a = 0, b = 0 }) => {
  console.log(props);
  let sumResult = a + b;
  return (
    <div>
      <p>
        {a} + {b} = {sumResult}{" "}
      </p>
    </div>
  );
};
export default App;
export { Hello };
export { SumParams };
