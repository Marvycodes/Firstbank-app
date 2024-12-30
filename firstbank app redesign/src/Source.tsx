import "./Source.css";
export default function Source(props) {
  const styles = {
    backgroundColor : !props.color? "#ffffff": "#010b25"
  }
  return (
    <div className="fdfv"
     onClick={props.holdFunction}
     style={styles}>
      <img src={props.img} alt="" className="source-test" />
      <h1 className="hhhh">{props.name} </h1> 
    </div>
  );
}
