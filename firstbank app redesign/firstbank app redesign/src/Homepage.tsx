import HeaderHomepage from "./HeaderHomepage.tsx";
import Camera from "./Camera.tsx";
import Balance from "./Balance.tsx";
import "./About.css";
import "./Homepage.css";
import Containerhome from "./Data7.tsx";
import Sort from "./Sort.tsx";
import { useState } from "react";
import Statistics from "./Statistics.tsx";
import Downhome from "./Downhome.tsx";
import Data8 from "./Data8.tsx";
import LinkHome from "./LinkHome.tsx";
import Linkbutt from "./Linkbutt.tsx";

export default function Help() {
  const [containerhome, setContainerhome] = useState(Containerhome);
  const [data8, setData8] = useState(Data8);
  const contHome = containerhome.map((inside) => (
    <Sort
      key={inside.id}
      name={inside.name}
      img={inside.img}
      color={inside.color}
    />
  ));
  const dathome = data8.map((inside) => (
    <Downhome
      key={inside.id}
      name={inside.name}
      img={inside.img}
      color={inside.color}
    />
  ));
  return (
    <div className="div-homepage">
      <div className="header-qt2">
        <HeaderHomepage />
        <Camera />
        <Balance />
        <div className="main-fort">
          <div>
            <div className="conthome-div"> {contHome}</div>
            <LinkHome />
          </div>
          <Statistics />
          <h1 className="stat-h12">MY ADS</h1>
          <div className="mmain-dart"></div>
          <div className="darty">
            <div className="dart-round"></div>
            <div className="dart-round"></div>
          </div>
          <div className="invisible-div"></div>
        </div>
        <div>
          <div className="data-T"></div>
          <div className="div-dath">{dathome}</div>
          <Linkbutt />
        </div>
      </div>
    </div>
  );
}
