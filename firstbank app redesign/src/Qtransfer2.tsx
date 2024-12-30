import "./Qtransfer.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import img50 from "./images/Union (4).png";

export default function Qtransfer2() {
  const [form2, setForm2] = useState({ password2: "" });

  function clickPlay(event) {
    setForm2((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  const styleInput = {
    backgroundColor: form2.password2 ? "#D91515" : "white",
  };
  const stylepin = {
    display: form2.password2 ? "none" : "block",
  };
  const stylepin2 = {
    display: form2.password2 ? "block" : "none",
  };
  function handleSubmit(event) {
    event.preventDefault();
    if (form2.password2 === "1234") {
      console.log("signed up");
    } else {
      console.log("password");
    }
  }

  const [goToContact, setGoToContact] = useState(false);
  if (goToContact) {
    return <Navigate to="/" />;
  }
  const styleBottom = {
    backgroundColor: "#fcb600",
  };

  return (
    <div className="Quick-Transfer14">
      <h1 className="h1-1">Quick Airtime</h1>
      <h3 className="h3-3">To buy an Airtime enter transaction pin</h3>
      <form className="formm" onSubmit={handleSubmit}>
        <div className="div-this">
          <h3 className="geek" style={stylepin}>
            Enter Transaction pin
          </h3>
          <h3 className="geek1" style={stylepin2}>
            Enter Transaction pin
          </h3>
          <input
            className="input-2"
            type="text"
            placeholder=""
            name="password2"
            value={form2.password2}
            onChange={clickPlay}
          />
          {form2.password2 && <img src={img50} alt="" className="eye-image" />}
          <div className="input-3" style={styleInput}></div>
          {form2.password2 && <h2 className="filll">4 digits required</h2>}
        </div>

        <button className="button">CONTINUE</button>
      </form>

      <button
        className="hh2"
        onClick={() => {
          setGoToContact(true);
        }}
      >
        <h3 className="can-cel">CANCEL</h3>
      </button>
      <div className="main-riund">
        {" "}
        <div className="round-bottomss" style={styleBottom}></div>
        <div className="round-bottom2ss"></div>
        <div className="round-bottom3ss"></div>
        <div className="round-bottom4ss"></div>
        <div className="round-bottom5ss"></div>
      </div>
    </div>
  );
}
