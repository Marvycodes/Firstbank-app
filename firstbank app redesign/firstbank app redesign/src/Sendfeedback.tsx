import Headerhelp6 from "./Headerhelp6";
import img50 from "./images/Union (6).png";
import { useState } from "react";
import "./ForgotmPIN.css";

export default function ForgotmPIN() {
  const [form3, setForm3] = useState({
    enterName: "",
    accountNumber: "",
    email: "",
    phoneNumber: "",
    subject: "",
    writeMessage: "",
  });

  function handleChange2(event) {
    setForm3((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  const styleForm = {
    display: form3.enterName[0] ? "none" : "block",
  };
  const styleForm2 = {
    display: form3.accountNumber[0] ? "none" : "block",
  };
  const styleForm3 = {
    display: form3.email[0] ? "none" : "block",
  };
  const styleForm4 = {
    display: form3.phoneNumber[0] ? "none" : "block",
  };
  const formsDiv = {
    backgroundColor: form3.enterName ? "#FCB600" : "#646464",
  };
  const formsDiv2 = {
    backgroundColor: form3.accountNumber ? "#FCB600" : "#646464",
  };
  const formsDiv3 = {
    backgroundColor: form3.email ? "#FCB600" : "#646464",
  };
  const formsDiv4 = {
    backgroundColor: form3.phoneNumber ? "#FCB600" : "#646464",
  };
  console.log(form3);

  function handSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <div className="header-qt">
        <Headerhelp6 />
      </div>
      <div className="Quick-Transfer8">
        <form onSubmit={handSubmit}>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="enterName"
              value={form3.enterName}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.enterName && (
              <img src={img50} alt="" className="eye-image2" />
            )}
            {form3.enterName && <h2 className="h2-h1">Enter Name</h2>}
            <h2 className="h2-h2" style={styleForm}>
              Enter Name
            </h2>
            <div className="div-form" style={formsDiv}></div>
          </div>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="accountNumber"
              value={form3.accountNumber}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.accountNumber && <img src={img50} alt="" className="eye-image2" />}
            {form3.accountNumber && <h2 className="h2-h1">Enter Number</h2>}
            <h2 className="h2-h2" style={styleForm2}>
              Enter Number
            </h2>
            <div className="div-form" style={formsDiv2}></div>
            {form3.accountNumber && <h3 className="h5-h5">Cannot be empty</h3>}
          </div>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="email"
              value={form3.email}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.email && <img src={img50} alt="" className="eye-image2" />}
            {form3.email && <h2 className="h2-h1">Email</h2>}
            <h2 className="h2-h2" style={styleForm3}>
              Email
            </h2>
            <div className="div-form" style={formsDiv3}></div>
            {form3.email && <h3 className="h5-h5">5 digits required</h3>}
          </div>
          <div className="div-dome">
            <input
              className="input1"
              type="number"
              name="phoneNumber"
              value={form3.phoneNumber}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.phoneNumber && (
              <img src={img50} alt="" className="eye-image2" />
            )}
            {form3.phoneNumber && <h2 className="h2-h1">Phone Number</h2>}
            <h2 className="h2-h2" style={styleForm4}>
              phone Number
            </h2>
            <div className="div-form" style={formsDiv4}></div>
          </div>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="subject"
              value={form3.subject}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.phoneNumber && (
              <img src={img50} alt="" className="eye-image2" />
            )}
            {form3.phoneNumber && <h2 className="h2-h1">Subject</h2>}
            <h2 className="h2-h2" style={styleForm4}>
              Subject
            </h2>
            <div className="div-form" style={formsDiv4}></div>
          </div>
          <div className="div-dome">
            <input
              className="input1"
              type="text"
              name="writeMessage"
              value={form3.writeMessage}
              placeholder=""
              onChange={handleChange2}
            />
            {form3.subject && (
              <img src={img50} alt="" className="eye-image2" />
            )}
            {form3.subject && <h2 className="h2-h1">Write Message</h2>}
            <h2 className="h2-h2" style={styleForm4}>
              Write Message
            </h2>
            <div className="div-form" style={formsDiv4}></div>
          </div>
          <button className="save-btn">SAVE</button>
        </form>
      </div>
    </div>
  );
}
 