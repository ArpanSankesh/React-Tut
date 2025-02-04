import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './pages/Register';

const store = configureStore({
  reducer: rootReducer,
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>HELLO WORLD</div>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/projects',
    element: <div>PROJECTS</div>
  },
]);

function App() {
  return (
    <>
      <Provider store={store} >
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
