import React, { useState, useEffect } from 'react';

export default function Form(){

    return(
        <>
        <div className="estatico-sidebar ">
        <div className="mb-3 pt-5 px-5 ">
        <form action="https://formspree.io/f/moqgzenz" method="post">
  <label for="exampleFormControlInput1" className="form-label">Nombre</label>
  <input type="text" className="form-control" name='Nombre'  placeholder="" />

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Pregunta</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name='Pregunta' rows="3"></textarea>
  
</div>
<input type="submit" value="enviar" className='px-5 mx-5' />
</form>
</div>

</div>

        </>
    )

}