import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Teste from "./Teste";
export default function App(){

    return (
        <>
          <GlobalStyle/>
          <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Teste/>}/>
            </Routes>
          
          </BrowserRouter>
        </>
    );

}


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
  }
`