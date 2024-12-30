import "./Statistics.css"
import imgstats from "./images/Vector 664.png";
export default function Statistics() {
  return (
    <div className="stats-div">
      <h1 className="stat-h1">MY STATISTICS</h1>
      <img src={imgstats} alt="" className="img-stat" />
    </div>
  );
}
