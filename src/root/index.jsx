import React from "react";
import { BrowserRouter , Navigate, Route, Routes} from "react-router-dom";
const Root =()=>{
    return(
        <BrowserRouter>
       <Routes>
        <Route path="/home" element={<h1>Home</h1>}/>  
        <Route path={"/proporties"} element={<h1>Proporties</h1>}/>
        <Route  path="/" element={<Navigate to={"/home"}/>}/>
        <Route path="*" element={<h1>404 Not Found </h1>}/>
       </Routes>
        </BrowserRouter>
    )
}
export default Root