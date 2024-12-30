import logo from "./images/Vector (2).png";
import icon from "./images/Vector (3).png";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
export default function Header() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/notification" />;
  }
  return (
    <nav className="main-main23">
      <div className="main-header">
        <div className="half-header">
          <h1 className="firsty">
            <i>FirstBank</i>
          </h1>
          <h3 className="thirdy">Since 1894</h3>
        </div>
        <img src={logo} alt="" className="header-image34" />
      </div>
      <button
        className="header-icon2"
        onClick={() => {
          setGoToContact(true);
        }}
      >  
        <img src={icon} alt="" className="header-icon" />
      </button>
    </nav>
  );
}
