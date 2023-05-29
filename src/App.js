import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cuisine from "./Cuisine";
import About from "./About";
import Navbar from "./Navbar";
import Reservation from "./Reservation";
import Privatedining from "./Privatedining";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App () {
  return (
    <>
    
   <BrowserRouter>
   <Navbar/>
    <Routes>
      
    <Route path="/" element={<About/>}/>
    <Route path="/cuisine" element={<Cuisine/>}/>
    <Route path="/reservation" element={<Reservation/>}/>
    <Route path="/private dining" element={<Privatedining/>}/>
     
    </Routes>
    </BrowserRouter>
    </>
  )
};
export default App;