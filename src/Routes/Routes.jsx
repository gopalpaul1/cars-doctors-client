import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/authentication/SignUp/SignUp";
import Login from "../Pages/authentication/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;