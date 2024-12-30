import Adhelp from "./Adhelp.tsx";
import "./Ad.css";
import imgad from "./images/Group 331 (3).png";

export default function Quickguild() {
  return (
    <div className="only-header">
      <div className="only-header2">
        <img src={imgad} alt="" className="imggad" />
      </div>
      <Adhelp />
    </div>
  );
}
