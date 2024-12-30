import { useState } from "react";
import "./HeaderhelpT.css";
import { Navigate } from "react-router-dom";
import img20F from "./images/Arrow 1 (1).png";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/" />;
  }
  return (
    <nav className="main-main2">
      <button
        className="btn"
        onClick={() => {
          setGoToContact(true);
        }}
      >
        <img src={img20F} alt="" className="img-qt" />
      </button>

      <div className="main-head">
        <h1 className="firsti">Transfer</h1>
      </div>
    </nav>
  );
}
