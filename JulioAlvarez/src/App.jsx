import { useState } from 'react';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import Nav from './nav.jsx';
import PaginaEspecial from "./PaginaEspecial.jsx";
import Centrodelapagina from './centrodelapagina.jsx';

function App() {

  return (
    <>
    <div className="container-fluid">
    <div className="row">
        <Nav/>
      </div>
    </div>
    <div className="container">
      
      <div className="row">
        <Routes>
          <Route path='/' element={ <Centrodelapagina />}></Route>
          <Route path='/paginaprivada' element={<PaginaEspecial />} />

        </Routes>
     
      
      </div>
      
      </div>
    </>
  )
}

export default App
