import { useState } from "react";
import "./HeaderHomepage.css";
import { Navigate } from "react-router-dom";
import img20 from "./images/Arrow 1.png";
import imgmenhomepage from "./images/Union (8).png";
export default function HeaderQT() {
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/" />;
  }
  return (
    <nav className="main-main25">
      <button
        className="btn27"
        onClick={() => {
          setGoToContact(true);
        }}
      >
        <img src={img20} alt="" className="img-qt2" />
      </button>

      <div className="main-home">
        <h1 className="firsti-home">Dashboard</h1>
        <img src={imgmenhomepage} alt="" className="home-img" />
      </div>
    </nav>
  );
}
