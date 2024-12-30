import "./Sourcee.css"
export default function Sourcee(props) {
  return (
    <div className="sourcee-div">
      <img src={props.img} alt=""  className="img-10" />
      <h3 className="h3-33">{props.name}</h3>
      <img src={props.img2} alt=""  className="img-11j"/>
    </div>
  );
}
