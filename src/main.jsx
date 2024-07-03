import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Error from './component/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root'
import Home from './component/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
     {
      path: "/",
      element: <Home/>,
    },
   ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
  
  ,
)
