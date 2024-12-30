import { useState } from "react";
import "./Headerhelp33.css";
import { Navigate } from "react-router-dom";
import img38 from "./images/Group 329.png";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/faceidnineteen" />;
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
      <img src={img38} alt="" className="img-1111" />

      <h3 className="face-0idd">Face ID</h3>
    </button>
  );
}
