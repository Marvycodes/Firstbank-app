import imgCamera from "./images/Group 356.png";
import imgHistory from "./images/Union (9).png";
import "./Camera.css";
export default function Camera() {
  return (
    <div className="men-camera">
      <img src={imgCamera} alt="" className="men-imgg" />
      <div className="men-text">
        <h1 className="men-h4">Good Morning, Marvelous Patrick </h1>
        <h5 className="men-h5">Last Login 17/05/24 20:30</h5>
      </div>
      <div className="men-last">
        <h5 className="men-history">HISTORY</h5>
        <img src={imgHistory} alt="" className="immg-homr"/>
      </div>
    </div>
  );
}
