import { Route , Routes } from "react-router-dom"
import About from './pages/About'
import Button from "./components/Button"

const App = () => {
  return (
    <div className="bg-zinc-900 w-full h-screen p-10">
    <Button />

    <Routes>
      <Route path="/about" element={ <About />} />
    </Routes>
    </div>
  )
}

export default App