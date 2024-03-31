import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import HeroSignUp from './components/HeroSignUp/HeroSignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/heroSignUp',
        element: <HeroSignUp></HeroSignUp>
      },
      {
        path: '/login',
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
