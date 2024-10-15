import { useState } from "react";

const App = () => {

  // let a = 'Arpan';

  const [num , setNum] = useState(0)

  const changeA = () =>{
    setNum(num + 1)
  }
  const changeM = () =>{
    setNum(num - 1)
  }

  return (
    <div className="w-full h-screen bg-zinc-900 p-10">
      <h1 className="text-3xl">Number is : {num}</h1>
      <button className="bg-blue-400 px-5 py-2 rounded-md mt-5 mr-2" onClick={changeA}>Increment</button>
      <button className="bg-blue-400 px-5 py-2 rounded-md mt-5 " onClick={changeM}>Decrement</button>
    </div>
  )
}

export default App
