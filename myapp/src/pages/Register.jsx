// /* eslint-disable react-hooks/rules-of-hooks */
// import { useEffect } from "react";
import { useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log('calcullating...');
  for(let i = 0; i< 100000000; i++){
    num += 1;
  }
  return num;
  
}
const Register = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(expensiveCalculation()) ;

  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"])
  } 

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todos, index) => {
          return <p key={index}>{todos}</p>
        })}
        <button onClick={addTodo}> Add Todo</button>
      </div>
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}> +</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
};

export default Register;
