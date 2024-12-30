import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Forner from "./Forner";
import About from "./About";
import Contact from "./Contact";
import Three from "./Three.tsx";
import BalanceEnquiry from "./BalanceEnquiry.tsx";
import Help from "./Help.tsx";
import Quickguild from "./Quickguild.tsx";
import ForgotmPIN from "./ForgotmPIN.tsx";
import Resetquestions from "./Resetquestions.tsx";
import Sendfeedback from "./Sendfeedback.tsx";
import Firstrefer from "./Firstrefer.tsx";
import Faceidone from "./Faceidone.tsx";
import Faceidtwo from "./Faceidtwo.tsx";
import Faceidthree from "./Faceidthree.tsx";
import Faceidfour from "./Faceidfour.tsx";
import Faceidfive from "./Faceidfive.tsx";
import Faceidnineteen from "./Faceidnineteen.tsx";
import Faceid20 from "./Faceid20.tsx";
import Faceid21 from "./Faceid21.tsx";
import Faceid22 from "./Faceid22.tsx";
import Faceid23 from "./Faceid23.tsx";
import Faceid24 from "./Faceid24.tsx";
import Faceid25 from "./Faceid25.tsx";
import Faceid26 from "./Faceid26.tsx";
import Faceid27 from "./Faceid27.tsx";
import Faceid28 from "./Faceid28.tsx";
import Faceid29 from "./Faceid29.tsx";
import Faceid30 from "./Faceid30.tsx";
import Faceid31 from "./Faceid31.tsx";
import Faceid32 from "./Faceid32.tsx";
import Faceid33 from "./Faceid33.tsx";
import Ad from "./Ad.tsx";
import Notification from "./Notification.tsx";
import Homepage from "./Homepage.tsx";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Forner />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/three" element={<Three />} />
      <Route path="/balanceEnquiry" element={<BalanceEnquiry />} />
      <Route path="/help" element={<Help />} />
      <Route path="/quickguild" element={<Quickguild />} />
      <Route path="/forgetmpin" element={<ForgotmPIN />} />
      <Route path="/resetquestions" element={<Resetquestions />} />
      <Route path="/sendfeedback" element={<Sendfeedback />} />
      <Route path="/firstrefer" element={<Firstrefer />} />
      <Route path="/faceidone" element={<Faceidone />} />
      <Route path="/faceidtwo" element={<Faceidtwo />} />
      <Route path="/faceidthree" element={<Faceidthree />} />
      <Route path="/faceidfour" element={<Faceidfour />} />
      <Route path="/faceidfive" element={<Faceidfive />} />
      <Route path="/faceidnineteen" element={<Faceidnineteen />} />
      <Route path="/faceid20" element={<Faceid20 />} />
      <Route path="/faceid21" element={<Faceid21 />} />
      <Route path="/faceid22" element={<Faceid22 />} />
      <Route path="/faceid23" element={<Faceid23 />} />
      <Route path="/faceid24" element={<Faceid24 />} />
      <Route path="/faceid25" element={<Faceid25 />} />
      <Route path="/faceid26" element={<Faceid26 />} />
      <Route path="/faceid27" element={<Faceid27 />} />
      <Route path="/faceid28" element={<Faceid28 />} />
      <Route path="/faceid29" element={<Faceid29 />} />
      <Route path="/faceid30" element={<Faceid30 />} />
      <Route path="/faceid31" element={<Faceid31 />} />
      <Route path="/faceid32" element={<Faceid32 />} />
      <Route path="/faceid33" element={<Faceid33 />} />
      <Route path="/ad" element={<Ad />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
    </AnimatePresence>
  );
}
