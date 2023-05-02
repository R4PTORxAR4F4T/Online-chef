/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'blog',
          element: <Blog></Blog>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
        {
          path: "*",
          element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ])

  export default router;