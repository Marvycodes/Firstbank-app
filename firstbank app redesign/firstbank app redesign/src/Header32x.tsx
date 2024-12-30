import { useState } from "react";
import "./Headerhelp33.css";
import { Navigate } from "react-router-dom";
import img211 from "./images/Ellipse 473.png";
import "./Header32x.css";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/faceid33" />;
  }
  return (
    <button
      className="div-dobble12"
      onLoad={() => {
        setTimeout(() => {
          setGoToContact(true);
        }, 1000);
      }}
    >
      <img src={img211} alt="" className="img-1111x" />
      <div className="btn-forner"></div>
    </button>
  );
}
