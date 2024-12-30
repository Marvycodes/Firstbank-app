import "./Faceid.css";
import { Navigate } from "react-router-dom";

import { useState } from "react";
import img11 from "./images/Union-7.png";
export default function Faceid() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/faceidone" />;
  }
  return (
    <div className="face-id21">
      <button
        className="btn"
        onClick={() => {
          setGoToContact(true);
        }}
      >
        <div className="face-id2"></div>
      </button>

      <img src={img11} alt="" className="finger-print" />
      <h5 className="id-text">LOGIN WITH FACEID</h5>
    </div>
  );
}
