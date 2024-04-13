import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./firebase/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
