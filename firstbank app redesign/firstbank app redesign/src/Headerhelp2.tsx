import { useState } from "react";
import "./Headerhelp.css";
import { Navigate } from "react-router-dom";
import img20 from "./images/Arrow 1.png";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/help" />;
  }
  return (
    <nav className="main-main2">
      <button
        className="btn"
        onClick={() => {
          setGoToContact(true);
        }}
      >
        <img src={img20} alt="" className="img-qt" />
      </button>

      <div className="main-head">
        <h1 className="firsti">Quick</h1>

        <h1 className="firs2">Guide</h1>
      </div>
    </nav>
  );
}