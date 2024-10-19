import { useContext } from "react"
import { DataContext } from "./context/UserContext"

const App = () => {

const data = useContext(DataContext)
console.log(data);


  return (
    <div className="bg-zinc-900 w-full h-screen p-10">
  
  <h1 className="text-white">This is App</h1>
    </div>
  )
}

export default App