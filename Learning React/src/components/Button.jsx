import { Link } from "react-router-dom"

const Button = () => {
  return (
    <div>
        <button className="bg-blue-400 text-slate-50 py-3 px-10 m-3 text-2xl rounded md"><Link to="/about">About</Link></button>
        <button className="bg-blue-400 text-slate-50 py-3 px-10 m-3 text-2xl rounded md"><Link to="/">Home</Link></button>
    </div>
  )
}

export default Button