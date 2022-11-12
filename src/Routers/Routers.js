import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Page/Home/Home";
import MainOutLet from "../MainOutLet/MainOutLet";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainOutLet />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])