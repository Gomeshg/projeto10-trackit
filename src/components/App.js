import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { GlobalStyle } from "../styles/globalstyles";

import Login from "./user/Login";
import SignUp from "./user/SignUp";
import Today from "../components/trackit/Today"

export default function App(){

    return (
        <>
          <GlobalStyle/>
          <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
              <Route path="/Today" element={<Today/>}/>
            </Routes>
          
          </BrowserRouter>
        </>
    );

}