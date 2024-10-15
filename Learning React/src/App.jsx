import { useState } from "react";

function App() {

 const [username, setUsername] = useState('')

 const submitHandler = (e) =>{
  e.preventDefault()
  console.log(username);
  setUsername('')
 }

  return (
    <div className="w-full h-screen bg-zinc-900 flex justify-center items-center">
      <form className=" flex justify-center items-center flex-col "onSubmit={(e) => {submitHandler(e)}} >
        <input
        value={username} 
        onChange={(e) => {setUsername(e.target.value)}}
        type="text" placeholder="Name" className="py-3 px-5 rounded-lg m-2 text-xl outline-none"/>
        <button  className="py-3 px-12 rounded-lg m-2 bg-blue-400 text-semibold text-xl">Submit</button>
      </form>
    </div>
  )
}

export default App