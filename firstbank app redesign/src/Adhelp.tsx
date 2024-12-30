import { useState } from "react";
import "./Adhelp.css";
import { Navigate } from "react-router-dom";

export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/homepage" />;
  }
  return (
    <button
      className="btn"
      onClick={() => {
        setGoToContact(true);
      }}
    >
      <h3 className="close-ad">Close Ad</h3>
    </button>
  );
}
