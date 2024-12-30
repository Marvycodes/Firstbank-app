import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./QtransferhelpT.css";
import Data2T from "./Data2T.tsx";
import Sourcee from "./Sourcee.tsx";
import Link22T from "./Link22T.tsx";
import imgtt from "./images/Group 383.png";
import Linkbutt from "./LinkbuttT.tsx";
import Downhome from "./Downhome.tsx";
import Data8T from "./Data8T.tsx";

export default function Qtransferhelp() {
  const [data2, setData2] = useState(Data2T);
  const [data8T, setData8] = useState(Data8T);
  const right = data2.map((obj2) => (
    <Sourcee key={obj2.id} img={obj2.img} name={obj2.name} img2={obj2.img2} />
  ));
  const [goToContact, setGoToContact] = useState(false);

  if (goToContact) {
    return <Navigate to="/" />;
  }
  const dathome = data8T.map((inside) => (
    <Downhome
      key={inside.id}
      name={inside.name}
      img={inside.img}
      color={inside.color}
    />
  ));

  return (
    <div>
      <div className="Quick-Transfer2">
        <h1 className="hi-t">MY FAVOURITE</h1>
        <div className="div-tt">
          <div className="div-t">
            <img src={imgtt} alt="" className="src-t" />
          </div>
          <h3>Add</h3>
        </div>
        <h1 className="hh-type">CHOOSE TRANSFER TYPE</h1>
        <div className="ds">
          <div className="right-div">{right}</div>
          <Link22T />
        </div>
        <div>
          <div className="div-dathtt">{dathome}</div>
          <Linkbutt />
        </div>
      </div>
    </div>
  );
}
