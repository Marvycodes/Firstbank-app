import { useState } from "react";
import "./Headerhelp33.css";
import { Navigate } from "react-router-dom";
import img211 from "./images/Group 340 (2).png";
import "./Header32.css";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/faceid33" />;
  }
  return (
    <button
      className="div-dobble1"
      onLoad={() => {
        setTimeout(() => {
          setGoToContact(true);
        }, 500);
      }}
    >
      <img src={img211} alt="" className="img-1111" />

      <h3 className="face-0idd1">Face ID</h3>
    </button>
  );
}
