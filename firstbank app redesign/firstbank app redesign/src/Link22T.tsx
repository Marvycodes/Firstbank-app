import { Link } from "react-router-dom";
import "./Link22T.css";
export default function Link22() {
  return (
    <div className="right-div2">
      <Link to="/homepage/transfer/firstbank" className="sourcee2-div"></Link>
      <Link
        to="/homepage/transfer/tootherbanks"
        className="sourcee2-div"
      ></Link>
      <Link to="/homepage/transfer/fxsales" className="sourcee2-div"></Link>
      <Link
        to="/homepage/transfer/Sendbeneficiaries"
        className="sourcee2-div"
      ></Link>
      <Link to="/homepage/transfer/eNaira" className="sourcee2-div"></Link>
    </div>
  );
}
