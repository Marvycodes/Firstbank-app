import Headerhelp2 from "./Headerhelp2";
import "./Quickguild.css";
import Data3 from "./Data3.tsx";
import Source3 from "./Source3.tsx";

export default function Quickguild() {
  const middle = Data3.map((obj) => (
    <Source3 key={obj.id} img={obj.img} name={obj.name} />
  ));
  return (
    <div>
      <div className="header-qt">
        <Headerhelp2 />
      </div>
      <div className="Quick-Transfer2">
        <h4 className="hh4">HOW DO I REGISTER?</h4>
        {middle}
      </div>
    </div>
  );
}
