import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Error from './component/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      // {
      //   path: "contacts/:contactId",
      //   element: <Contact />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
