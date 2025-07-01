import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddEvent from "../pages/AddEvent/AddEvent";
import Events from "../pages/Events/Events";
import MyEvents from "../pages/MyEvents/MyEvents";
import PrivateRoute from "./PrivateRoute";

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
            element : <PrivateRoute>
                <AddEvent/>
            </PrivateRoute>
        },
        {
            path : '/all-events',
            element : <PrivateRoute>
                <Events/>
            </PrivateRoute>
        },
        {
            path : '/my-events',
            element :<PrivateRoute>
                 <MyEvents/>
            </PrivateRoute>
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