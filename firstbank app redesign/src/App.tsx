import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes.tsx";

export default function () {
  return (
    <div>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}
