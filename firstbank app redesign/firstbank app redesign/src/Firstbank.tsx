import HeaderhelpF from "./HeaderhelpF.tsx";
import QtransferhelpF from "./QtransferhelpF.tsx";
import "./About.css";

export default function Help() {
  return (
    <div>
      <div className="header-qt">
        <HeaderhelpF />
      </div>
      <div className="big-big">
        <QtransferhelpF />
      </div>
    </div>
  );
}
