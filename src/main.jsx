import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./assets/Pages/Home";
import EstateDetails from "./Components/EstateDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./firebase/AuthProvider";

const router = createBrowserRouter([
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
        element: <EstateDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
