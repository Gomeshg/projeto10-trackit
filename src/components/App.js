import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import APIs from "../services/APIs";

import { GlobalStyle } from "../styles/globalstyles";

import Login from "./user/Login";

export default function App(){

    return (
        <>
          <GlobalStyle/>
          <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Login/>}/>
            </Routes>
          
          </BrowserRouter>
        </>
    );

}