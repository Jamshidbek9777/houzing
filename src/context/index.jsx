import React from "react";
// import { createContext } from "react";
import PropertiesProvider from "./properties";

// const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <div>
    
    <PropertiesProvider>{children}</PropertiesProvider>
    </div>
  );
};
export default RootContext;
