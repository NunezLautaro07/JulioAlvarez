import React, { useState, useEffect } from "react";
import fisica from "./imagenes/fisica.jpg"
import "./imagenes/style.css"

function Header() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/podcast")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
    <div className="container-fluid">
      {posts.map((post) => (
        <div key={post.id}>
            <hr className="mb-3" />
        <div className="row g-2" >
          
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 ">
            <img src={fisica} className="imagen-podcast"  />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8 ">
            {/* <p className="fs-5">{post.id}</p> */}
              <p className="fs-5">{post.nombre}</p>
              <p className="card-text ">{post.descripcion}</p>
            </div>
          
          </div>
          <hr className="mb-3" />
          </div>
        
      ))}
      </div>
    </>
  );
}

export default Header;
