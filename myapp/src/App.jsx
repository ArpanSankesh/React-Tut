import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HELLO WORLD</div>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/projects',
    element: <div>PROJECTS</div>
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
