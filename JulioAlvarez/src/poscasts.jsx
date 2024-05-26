import React, { useState, useEffect } from "react";
import fisica from "./imagenes/fisica.jpg";
import "./imagenes/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
library.add(faCirclePlay);
library.add(faFilePdf);

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
      <div className="container-fluid margen-arriba-nav">
        {posts.map((post) => (
          <div key={post.id}>
            <hr className="mb-4" />
            <div className="row g-2 ">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 ">
                <img src={fisica} className="imagen-podcast" />
              </div>
              <div className="col-xl-9 col-lg-8 col-md-8  col-sm-8">
                {/* <p className="fs-5">{post.id}</p> */}
                <p className=" ">
                  <span className="fw-bold">{post.nombre}</span>
                  <br /> {post.descripcion}
                  <br className="" />
                  <div className="mt-2">
                    <FontAwesomeIcon icon="file-pdf" size="xl" className="  " />
                    <FontAwesomeIcon
                      className="ml-1"
                      icon={faCirclePlay}
                      size="xl"
                    />{" "}
                    <p className="d-inline disabled small blockquote-footer">
                      5:40
                    </p>
                  </div>
                </p>
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
