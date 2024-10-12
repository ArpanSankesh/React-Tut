
const App = () => {

  const a = 'Arpan';

  const abc = () => {
    console.log('hello');
    
  }

  return (
    <div className="w-full h-screen bg-zinc-900 p-10">
      <h1 className="text-3xl">Hello, {a}</h1>
      <button className="bg-blue-400 px-5 py-2 rounded-md mt-5" onClick={abc}>Change user</button>
    </div>
  )
}

export default App
