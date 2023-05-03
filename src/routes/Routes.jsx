/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Chefs from "../pages/Chefs/Chefs";
import Details from "../pages/Details/Details";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          children:[
            // {
            //   path:'/',
            //   element:<Chefs></Chefs>,
            //   loader:({params}) => fetch(`http://localhost:5000/country/${1}`)
            // },
            {
              path:'country/:id',
              element:<Chefs></Chefs>,
              loader:({params}) => fetch(`http://localhost:5000/country/${params.id}`),
              // children:[
              //   {
              //     path:'chefDetails/:id',
              //     element:<Details></Details>,
              //     loader:({params}) => fetch(`http://localhost:5000/country/${params.id}`),
              //   }
              // ]
            },
          ]
        },
        {
          path:'chefDetails/:id',
          element:<Details></Details>,
          loader:({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),
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