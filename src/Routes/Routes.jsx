import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../assets/Pages/Home";
import EstateDetails from "../Components/EstateDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home />,
      },
      {
        path: "/estate/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
