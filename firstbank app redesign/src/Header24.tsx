import { useState } from "react";
import "./Headerhelp33.css";
import { Navigate } from "react-router-dom";
import img204 from "./images/Group 332.png";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/faceid25" />;
  }
  return (
    <button
      className="div-dobble"
      onLoad={() => {
        setTimeout(() => {
          setGoToContact(true);
        }, 30);
      }}
    >
      <img src={img204} alt="" className="img-1111" />

      <h3 className="face-0idd">Face ID</h3>
    </button>
  );
}
