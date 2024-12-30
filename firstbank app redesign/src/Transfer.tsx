import HeaderhelpT from "./HeaderhelpT.tsx";
import QtransferhelpT from "./QtransferhelpT.tsx";
import "./About.css";

export default function Help() {
  return (
    <div>
      <div className="header-qt">
        <HeaderhelpT />
      </div>
      <div className="big-big">
        <QtransferhelpT />
      </div>
    </div>
  );
}
