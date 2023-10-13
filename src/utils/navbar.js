import React from "react";
import useId from "../hooks/useId";
import HomePage from "../pages/Home/index.jsx";
import PropertiesPage from "../pages/Properties/index.jsx";

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
    elements: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
];

