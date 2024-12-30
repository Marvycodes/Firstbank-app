import "./Downhome.css"
export default function Downhome(props) {
  return (
    <div className="main-dart">
      <img src={props.img} alt=""  className="img-dart2"/>
      <h1 className="downhome-h1">{props.name}</h1>
    </div>
  );
}
