import React, { useState, useEffect } from 'react';
import "./imagenes/style.css";

function Sidebar(){

    return(
        <>
        <div className="estatico-sidebar margen  margen-arriba-nav-sidebar" >
            
         
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button
                className="btn btn-toggle  dropdown-toggle d-inline-flex align-items-center rounded border-0 collapsed  "
                data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                Futuro
              </button>
              <div className="collapse  " id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal   pb-1 small">
                  <li><a href="#"
                      className="   d-inline-flex text-decoration-none rounded">Futuro</a></li>
                  <li><a href="#"
                      className="   d-inline-flex text-decoration-none rounded">Futuro</a></li>
                  <li><a href="#"
                      className="   d-inline-flex text-decoration-none rounded">Futuro</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn border-0   "
                >
                Futuro
              </button>
            </li>
            <li className="mb-1">
              <button
                className="btn border-0   "
                >
                Futuro
              </button>
            </li> <li className="mb-1">
              <button
                className="btn border-0   "
                >
                Futuro
              </button>
            </li> <li className="mb-1">
              <button
                className="btn border-0   "
                >
                Futuro
              </button>
            </li>
          
           
          </ul>
        </div>
       
        </>
    )

}
export default Sidebar;