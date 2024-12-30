import "./Qtransfer2.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import img50 from "./images/Union (4).png";

export default function Qtransfer() {
  const [form2, setForm2] = useState({ password2: "" });
  const [showPassword, setShowPassword] = useState(false);
  const maxLength = 3;

  function clickPlay(event) {
    if (form2.password2.length <= maxLength) {
      setForm2((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    }
    event.preventDefault();
  }
  const styleInput = {
    backgroundColor: form2.password2 ? "#D91515" : "white",
  };
  const styleInput4 = {
    backgroundColor: form2.password2 ? "#EBA902" : "white",
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
      window.location = "/";
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
  
  function handEye() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="Quick-Transfer">
      <h1 className="h1-1">Quick Transfer</h1>
      <h3 className="h3-3">To make Quick Transfer enter transaction pin</h3>
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
            type={!showPassword ? "number" : "password"}
            maxLength={maxLength}
            placeholder=""
            name="password2"
            value={form2.password2}
            onChange={clickPlay}
          />
          {form2.password2 && (
            <img src={img50} alt="" onClick={handEye} className="eye-img" />
          )}
          {form2.password2.length === 4 ? (
            <div className="input-3" style={styleInput4}></div>
          ) : (
            <div className="input-3" style={styleInput}></div>
          )}
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
        <div className="round-bottom" style={styleBottom}></div>
        <div className="round-bottom2"></div>
        <div className="round-bottom3"></div>
        <div className="round-bottom4"></div>
        <div className="round-bottom5"></div>
        <div className="round-bottom6"></div>
        <div className="round-bottom7"></div>
      </div>
    </div>
  );
}
