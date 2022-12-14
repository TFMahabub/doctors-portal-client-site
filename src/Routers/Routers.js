import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Page/Appointment/Appointment";
import Login from "../Components/Page/Authentication/Login/Login";
import Register from "../Components/Page/Authentication/Register/Register";
import Home from "../Components/Page/Home/Home";
import MainOutLet from "../MainOutLet/MainOutLet";
import PrivateRoute from "./PrivateRoute";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainOutLet />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/appointment',
        element: <PrivateRoute><Appointment /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Register />
      },
    ]
  }
])