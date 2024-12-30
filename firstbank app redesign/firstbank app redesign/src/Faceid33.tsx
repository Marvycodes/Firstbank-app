import Linked from "./Linked.tsx";
import "./Forner.css";
import Header from "./Header.tsx";
import Header32xx from "./Header32xx.tsx";
import Container from "./Container.tsx";
import Source from "./Source.tsx";
import { useState, useEffect } from "react";
import Faceid from "./Faceid.tsx";
import img15 from "./images/Subtract (5).png";
import { Navigate } from "react-router-dom";
export default function Forner() {
  const [form1, setForm1] = useState({ password: "" });

  const [container, setContainer] = useState(Container);

  const [roll, setRoll] = useState("");
  function holdOption(id) {
    setContainer((oldCont) =>
      oldCont.map((obj) => {
        return obj.id === 1 ? { ...obj, name: "Marvelous", img: img15 } : obj;
      })
    );
  }

  const left = container.map((inside) => (
    <Source
      key={inside.id}
      name={inside.name}
      img={inside.img}
      color={inside.color}
      holdFunction={() => holdOption(inside.id)}
    />
  ));
  function handleChange(event) {
    setForm1((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  useEffect(() => {
    function idid(id) {
      setContainer((prev) =>
        prev.map((obj) => {
          return obj.id === id ? (document.body.style.display = none) : body;
        })
      );
    }
  }, []);
  const styles1 = {
    backgroundColor: form1.password[0] ? "#FCB600" : "#FFFFFF",
  };
  const styles2 = {
    backgroundColor: form1.password[1] ? "#FCB600" : "#FFFFFF",
  };
  const styles3 = {
    backgroundColor: form1.password[2] ? "#FCB600" : "#FFFFFF",
  };
  const styles4 = {
    backgroundColor: form1.password[3] ? "#FCB600" : "#FFFFFF",
  };
  const styles5 = {
    backgroundColor: form1.password[4] ? "#FCB600" : "#FFFFFF",
  };
  const styles6 = {
    backgroundColor: form1.password[5] ? "#FCB600" : "#FFFFFF",
  };
  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/ about" />;
  }

  return (
    <div>
      <div className="forr">
        <Header />
        <div className="grid-div">
          <div className="manana"> {left}</div>
          <Linked />
        </div>

        <form>
          <h1 className="oneofone">Enter your mPIN to login</h1>

          <div className="form-icon" style={styles1}></div>
          <div className="form-icon2" style={styles2}></div>
          <div className="form-icon3" style={styles3}></div>
          <div className="form-icon4" style={styles4}></div>
          <div className="form-icon5" style={styles5}></div>
          <div className="input-icon" style={styles6}></div>

          <div className="header-32x">
            <Header32xx />
          </div>

          <div className="ring">{roll}</div>

          <img src={img15} alt="" className="input-icon " />

          <input
            type="number"
            placeholder=""
            name="password"
            onChange={handleChange}
            value={form1.password}
          />
        </form>
      </div>

      <Faceid />
    </div>
  );
}
