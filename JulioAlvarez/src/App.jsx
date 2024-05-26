import { useState } from 'react';
import React from 'react';
import Header from './poscasts.jsx';
import Nav from './nav.jsx';
import Sidebar from "./Sidebar.jsx";
import Form from "./form.jsx";
import PaginaEspecial from "./PaginaEspecial.jsx";

function App() {

  return (
    <>
    <div className="container-fluid">
    <div className="row">
        <Nav></Nav>
      </div>
    </div>
    <div className="container">
      
      <div className="row">
        
      <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 "><Sidebar /></div>
      <div className="col-xl-7 col-lg-7 col-md-9 col-12  "><Header/></div>
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 "><Form></Form></div>
      
      </div>
      
      {/* <Nav /> */}
      </div>
    </>
  )
}

export default App
