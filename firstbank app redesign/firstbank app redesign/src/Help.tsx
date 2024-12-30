import Headerhelp from "./Headerhelp.tsx";
import Qtransferhelp from "./Qtransferhelp.tsx";
import "./About.css";

export default function Help() {
  return (
    <div>
      <div className="header-qt">
        <Headerhelp />
      </div>
      <div className="big-big"><Qtransferhelp /></div>
    </div>
  );
}
