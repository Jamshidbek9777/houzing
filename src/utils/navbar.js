import React from "react";
import useId from "../hooks/useId";
import HomePage from "../pages/Home/index.jsx";
import PropertiesPage from "../pages/Properties/index.jsx";
import LoginPage from "../pages/Login";

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <LoginPage />,
    title: "Login",
    path: "/login",
    private: false,
    hidden: true,
  },
];

