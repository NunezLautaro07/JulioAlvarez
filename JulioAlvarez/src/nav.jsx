import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import "./imagenes/style.css"
library.add(faMoon);
export default function Nav(){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      document.documentElement.dataset.bsTheme = theme === 'light' ? 'dark' : 'light';}
return(
    
    <>
  
<nav className="navbar bg-body-tertiary estatico-sidebar">

  <div className="container-fluid ">
  <a className="navbar-brand fs-4 " href="#">Julio Alvarez</a>
 <span className='d-flex '><FontAwesomeIcon icon="fa-solid fa-moon" size="xl" onClick={toggleTheme} /></span> 
    
  </div>
</nav>


</>
)
}