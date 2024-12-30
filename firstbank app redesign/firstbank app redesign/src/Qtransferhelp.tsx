import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Qtransferhelp.css";
import Data2 from "./Data2.tsx";
import Sourcee from "./Sourcee.tsx";
import Link22 from "./Link22.tsx"

export default function Qtransferhelp() {
  const [data2, setData2] = useState(Data2);
  const right = data2.map((obj2) => (
    <Sourcee key={obj2.id} img={obj2.img} name={obj2.name} img2={obj2.img2} />
  ));
  const [goToContact, setGoToContact] = useState(false);

  if (goToContact) {
    return <Navigate to="/" />;
  }

  return (
    <div className="Quick-Transfer2">
     
      <div className="right-div">{right}</div>
      <Link22/>
    </div>
  );
}
