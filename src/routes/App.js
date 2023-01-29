import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../App.css';

//Components
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Panelempre from '../pages/Panelempre';
import Panelps from '../pages/Panelps';



const App = () => {


  return (
    <BrowserRouter>
      <Routes>
          <Route exact path = "/" element = {<Login/>} />
          <Route exact path = "/inicio" element = {<Inicio/>} />
          <Route path ="*" element = {<NotFound/>} />
          <Route path ="/panelempre" element = {<Panelempre/>} />
          <Route path ="/panelps" element = {<Panelps/>} />

      </Routes>
    </BrowserRouter>           
  );
}

export default App;
