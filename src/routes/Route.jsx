import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddEvent from "../pages/AddEvent/AddEvent";
import Events from "../pages/Events/Events";
import MyEvents from "../pages/MyEvents/MyEvents";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children : [
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/addEvent',
            element : <AddEvent/>
        },
        {
            path : '/all-events',
            element : <Events/>
        },
        {
            path : '/my-events',
            element : <MyEvents/>
        },
        {
            path : '/login',
            element : <Login/>
        },
        {
            path : '/register',
            element : <Register/>
        },
         
      ]
    },
  ]);