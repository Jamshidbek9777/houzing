import React from "react";
import useId from "../hooks/useId";
import HomePage from "../pages/Home/index.jsx";
import Properties from "../pages/Properties/index.jsx";
// const Properties = React.lazy(()=>import("../pages/Properties"))
import HouseItem from "../pages/HouseItem/index.jsx";
import SigninPage from "../pages/Signin";
import SignupPage from "../pages/Singup";

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
    element: <SigninPage />,
    title: "Signin",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <SignupPage />,
    title: "Singup",
    path: "/singup",
    private: false,
    hidden: true,
  },
];
