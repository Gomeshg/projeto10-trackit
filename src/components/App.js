import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyles/globalstyles";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import Today from "../components/Today/Today";
import Habits from "../components/Habits/Habits";
import Historic from "../components/Historic/Historic";

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
              <Route path="/Historic" element={<Historic/>}/>

            </Routes>
          
          </BrowserRouter>
        </>
    );
}