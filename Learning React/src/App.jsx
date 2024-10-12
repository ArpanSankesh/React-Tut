
const App = () => {

  let user = 'Arpan';

  const changeUser = () => {
    console.log(user);
    user = 'Pratham'
    console.log(user);
  }

  return (
    <div className="w-full h-screen bg-zinc-900 p-10">
      <h1 className="text-3xl">Hello, {user}</h1>
      <button className="bg-blue-400 px-5 py-2 rounded-md mt-5" onClick={changeUser}>Change user</button>
    </div>
  )
}

export default App
