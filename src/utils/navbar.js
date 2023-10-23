import React from "react";
import useId from "../hooks/useId";
import HomePage from "../pages/Home/index.jsx";
import Properties from "../pages/Properties/index.jsx";
// const Properties = React.lazy(()=>import("../pages/Properties"))
import LoginPage from "../pages/Login";
import HouseItem from "../pages/HouseItem/index.jsx";

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
    element: <HouseItem />,
    title: "HouseItem",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Properties />,
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
