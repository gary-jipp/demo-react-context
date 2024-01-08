import 'App.css';

export default function Counter(props) {

  return (
    <div>
      Counter: <span className="counter"> {props.count} </span>
      <button onClick={props.increment}>+</button>
      <button onClick={props.clear}>0</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}