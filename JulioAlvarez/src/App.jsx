import { useState } from 'react';
import React from 'react';
import Header from './poscasts.jsx';
import Nav from './index2.jsx';
import Sidebar from "./Sidebar.jsx";
import Form from "./form.jsx"

function App() {

  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <div className="col-xl-3 col-lg-5 col-md-4 col-sm-12"><Sidebar /></div>
      <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12"><Header/></div>
      <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12"><Form></Form></div>
      </div>
      
      {/* <Nav /> */}
      </div>
    </>
  )
}

export default App
