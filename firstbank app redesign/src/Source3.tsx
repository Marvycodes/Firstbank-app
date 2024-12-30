import "./Source3.css";
export default function Source3(props) {
  return (
    <div className="sourcee-div3">
      <img src={props.img} alt="" className="img-100" />
      <h3 className="h3-333">{props.name}</h3>
    </div>
  );
}
