import React from "react";
import img from "../imagenes/LTXwatches.jpg";

function contact() {
  const  SendButton = () =>{
    alert('Sended')
  }
  return (
    <>
      <h3 className="txt-help">¿How we can help you?</h3>
      <div className="formulario_contacto">
        <fieldset>
          <img className="img-logo" src={img} alt="foto" />
          <p className="p-txt">Send your questions</p>
          <input className="nombre" type="text" placeholder="Name" required />
          <input
            className="apellido"
            type="text"
            placeholder="Last Name"
            required
          />
          <input className="email" type="email" placeholder="Email" required />
          <textarea placeholder=""></textarea>
          <input onClick={SendButton} className="mandar" type="submit" value="Send" />
        </fieldset>
      </div>
    </>
  );
}

export default contact;
