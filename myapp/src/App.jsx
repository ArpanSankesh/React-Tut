import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HELLO WORLD</div>
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
