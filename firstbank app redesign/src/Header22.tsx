import { useState } from "react";
import "./Headerhelp33.css";
import { Navigate } from "react-router-dom";
import img202 from "./images/Group 330 (2).png";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/faceid23" />;
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
      <img src={img202} alt="" className="img-1111" />

      <h3 className="face-0idd">Face ID</h3>
    </button>
  );
}
