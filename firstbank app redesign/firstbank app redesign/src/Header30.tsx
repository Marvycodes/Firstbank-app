import { useState } from "react";
import "./Headerhelp33.css";
import { Navigate } from "react-router-dom";
import img210 from "./images/Group 339.png";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/faceid31" />;
  }
  return (
    <button
      className="div-dobble"
      onLoad={() => {
        setTimeout(() => {
          setGoToContact(true);
        },100);
      }}
    >
      <img src={img210} alt="" className="img-1111" />

      <h3 className="face-0idd">Face ID</h3>
    </button>
  );
}
