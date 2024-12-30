import logo from "./images/Vector (2).png";
import { useState } from "react";
import "./HeaderQT.css";
import { Navigate } from "react-router-dom";
import img20 from "./images/Arrow 1.png";
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
        <img src={img20} alt="" className="img-qt" />
      </button>

      <div className="main-head">
        <div className="half-header">
          <h1 className="firsti">
            <i>FirstBank</i>
          </h1>
          <h3 className="thirdi">Since 1894</h3>
        </div>
        <img src={logo} alt="" className="header-image" />
      </div>
    </nav>
  );
}
