import "./Sort.css";
export default function Sort(props) {
  return (
    <div className="main-sort">
      <div className="upper-sort">
        <div className="sort-div">
          <img src={props.img} alt="" className="sort-img" />
        </div>
      </div>
      <h1 className="sort-h1">{props.name}</h1>
    </div>
  );
}
