// /* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useState } from "react";

const Register = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([second])

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todos, index) => {
          return <p key={index}>{todos}</p>
        })}
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
