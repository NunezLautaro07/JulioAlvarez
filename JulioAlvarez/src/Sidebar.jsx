import React, { useState, useEffect } from 'react';
import "./imagenes/style.css";

function Sidebar(){

    return(
        <>
        <div className="estatico-sidebar margen" >
            
          <a href="/"
            className="d-flex pb-3 mb-3 pt-3 text-center  text-decoration-none border-bottom">
            <span className="fs-5 text-center ">Temas</span>
          </a>
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
                className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed  "
                >
                Futuro
              </button>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed  "
                >
                Futuro
              </button>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed  "
                >
                Futuro
              </button>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed  "
                >
                Futuro
              </button>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed  "
                >
                Futuro
              </button>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed  "
                >
                Futuro
              </button>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed  "
                >
                Futuro
              </button>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle  d-inline-flex align-items-center rounded border-0 collapsed  "
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