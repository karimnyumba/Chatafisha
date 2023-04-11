import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
// import { Login, HomePage,  } from "./pages";
// import {HomePa}
import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/pages/login" element={<Login/>}/>
      <Route path="/pages/LoginForm" element={<LoginForm/>}/>
      <Route path="/pages/RegisterForm" element={<RegisterForm/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
