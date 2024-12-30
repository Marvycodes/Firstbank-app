import Headerhelp4 from "./Headerhelp4";
import img50 from "./images/Union (6).png";
import { useState } from "react";
import "./Resetquestions.css";

export default function Resetquestions() {
  const [form3, setForm3] = useState({
    Question: "",
    Answer: "",
    newPin: "",
    confirmPin: "",
    otp: "",
  });

  function handleChange2(event) {
    setForm3((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  const styleForm = {
    display: form3.Question[0] ? "none" : "block",
  };
  const styleForm2 = {
    display: form3.Answer[0] ? "none" : "block",
  };
  const styleForm3 = {
    display: form3.newPin[0] ? "none" : "block",
  };
  const styleForm4 = {
    display: form3.confirmPin[0] ? "none" : "block",
  };
  const formsDiv = {
    backgroundColor: form3.Question ? "#FCB600" : "#646464",
  };
  const formsDiv2 = {
    backgroundColor: form3.Answer ? "#FCB600" : "#646464",
  };
  const formsDiv3 = {
    backgroundColor: form3.newPin ? "#FCB600" : "#646464",
  };
  const formsDiv4 = {
    backgroundColor: form3.confirmPin ? "#FCB600" : "#646464",
  };
  console.log(form3);

  function handSubmit(event) {
    event.preventDefault();
    if (form3.newPin === form3.confirmPin && form3.Answer !== "") {
      console.log("logged successfully");
    } else {
      console.log("password");
    }
  }
  return (
    <div>
      <div className="header-qt">
        <Headerhelp4 />
      </div>
      <div className="Quick-Transfer8">
        <h4 className="hh4">
          ENTER TWO NEW SECURITY QUESTIONS AND THE ASSOCIATED ANSWERS
        </h4>
        <form onSubmit={handSubmit}>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="Question"
              value={form3.Question}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.Question && (
              <img src={img50} alt="" className="eye-image2" />
            )}
            {form3.Question && (
              <h2 className="h2-h1">Enter Secret Question 1</h2>
            )}
            <h2 className="h2-h2" style={styleForm}>
              Enter Secret Question 1
            </h2>
            <div className="div-form" style={formsDiv}></div>
          </div>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="Answer"
              value={form3.Answer}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.Answer && <img src={img50} alt="" className="eye-image2" />}
            {form3.Answer && <h2 className="h2-h1">Enter Secret Answer 1</h2>}
            <h2 className="h2-h2" style={styleForm2}>
              EnterSecret Answer 1
            </h2>
            <div className="div-form" style={formsDiv2}></div>
            {form3.Answer && <h3 className="h5-h5">Cannot be empty</h3>}
          </div>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="newPin"
              value={form3.newPin}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.newPin && <img src={img50} alt="" className="eye-image2" />}
            {form3.newPin && <h2 className="h2-h1">Enter Secret Question 2</h2>}
            <h2 className="h2-h2" style={styleForm3}>
              Enter Secret Question 2
            </h2>
            <div className="div-form" style={formsDiv3}></div>
            {form3.newPin && <h3 className="h5-h5">cannot be empty</h3>}
          </div>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="confirmPin"
              value={form3.confirmPin}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.confirmPin && (
              <img src={img50} alt="" className="eye-image2" />
            )}
            {form3.confirmPin && (
              <h2 className="h2-h1">Enter Secret Answer 2</h2>
            )}
            <h2 className="h2-h2" style={styleForm4}>
              Enter Secret Answer 2
            </h2>
            <div className="div-form" style={formsDiv4}></div>
            {form3.newPin && <h3 className="h5-h5">cannot be empty</h3>}
          </div>
          <div className="otp-div">
            <h1 className="h1-otp">Enter OTP</h1>
            <input
              className="input1-otp"
              type="text"
              name="otp"
              value={form3.otp}
              placeholder=""
              onChange={handleChange2}
            />
          </div>
          {<button className="save-btn2">SAVE</button>}
        </form>
      </div>
    </div>
  );
}
