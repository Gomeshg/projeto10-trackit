import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../styles/globalstyles";

import Login from "./user/Login";
import SignUp from "./user/SignUp";
import Today from "../components/trackit/Today";
import Habits from "../components/trackit/Habits";

export default function App(){

    return (
        <>
          <GlobalStyle/>
          <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
              <Route path="/Today" element={<Today/>}/>
              <Route path="/Habits" element={<Habits/>}/>
            </Routes>
          
          </BrowserRouter>
        </>
    );
}