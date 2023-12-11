import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/ErrorElement/Error.jsx";
import Home from "./Components/Pages/Home.jsx";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Menu from "./Components/Pages/Menu.jsx";
import NewProduct from "./Components/Pages/NewProduct.jsx";
import Logout from "./Components/Pages/Logout.jsx";
import SignUp from "./Components/Pages/SignUp.jsx";
import TermsOfService from "./Components/Pages/TermsOfService.jsx";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/new-product",
        element: <NewProduct />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/terms",
        element: <TermsOfService />,
      },
      {
        path: "/policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
