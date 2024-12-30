import { useState } from "react";
import "./Headerhelp33.css";
import { Navigate } from "react-router-dom";
import img28 from "./images/Vector (5).png";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/faceidfive" />;
  }
  return (
    <button
      className="div-dobble"
      onLoad={() => {
        setTimeout(() => {
          setGoToContact(true);
        }, 40);
      }}
    >
      <img src={img28} alt="" className="img-1111" />

      <h3 className="face-0idd">Face ID</h3>
    </button>
  );
}
