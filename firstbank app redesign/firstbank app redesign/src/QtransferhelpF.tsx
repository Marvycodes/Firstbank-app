import { useState } from "react";
import "./QtransferhelpF.css";
import Linkbutt from "./LinkbuttT.tsx";
import Downhome from "./Downhome.tsx";
import Data8T from "./Data8T.tsx";

export default function Qtransferhelp() {
  const [show, setShow] = useState(false);
  const [showT, setShowT] = useState("");
  const [show2, setShow2] = useState("");
  const [div, setDiv] = useState(false);

  const [formT, setFormT] = useState([
    {
      Adebit: "",
      Daccount: "",
      Eamount: "",
      Enarration: "",
    },
  ]);
  console.log(formT);

  function handleChange2(event) {
    setFormT((pre) =>
      pre.map((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      })
    );
  }
  function handSubmit(event) {
    event.preventDefault();
    if (formT[0].Daccount === "" && formT[0].Eamount === "") {
      setShow(true);
      setDiv(true);
    } else if (formT[0].Eamount === "") {
      setShow(true);
    } else if (formT[0].Daccount === "") {
      setShow(true);
    }
    const formevery = formT.every(
      (field) =>
        field.Adebit && field.Daccount && field.Eamount && field.Enarration
    );
    if (formevery) {
      console.log("Successfully signed in");
    } else {
      console.log("please enter");
    }
    if (formT[0].Daccount === "" && formT[0].Eamount === "") {
      setShowT("cannot be empty");
      setShow2("cannot be empty");
    } else if (formT[0].Eamount === "") {
      setShow2("cannot be empty");
    } else if (formT[0].Daccount === "") {
      setShowT("cannot be empty");
    }
  }
  const [data8T, setData8] = useState(Data8T);

  const dathome = data8T.map((inside) => (
    <Downhome
      key={inside.id}
      name={inside.name}
      img={inside.img}
      color={inside.color}
    />
  ));
  const styleForm = {
    display: formT[0].Adebit[0] ? "none" : "block",
  };
  const styleForm2 = {
    display: formT[0].Daccount[0] ? "none" : "block",
  };
  const styleForm3 = {
    display: formT[0].Eamount[0] ? "none" : "block",
  };
  const styleForm4 = {
    display: formT[0].Enarration[0] ? "none" : "block",
  };
  const formsDiv = {
    backgroundColor: formT[0].Adebit ? "#FCB600" : "#646464",
  };
  const formsDiv2 = {
    backgroundColor: formT[0].Daccount ? "#FCB600" : "#646464",
  };
  const formsDiv3 = {
    backgroundColor: formT[0].Eamount ? "#FCB600" : "#646464",
  };
  const formsDiv4 = {
    backgroundColor: formT[0].Enarration ? "#FCB600" : "#646464",
  };

  return (
    <div>
      <div className="Quick-Transfer2">
        <h1 className="hi-t">Available Daily Transaction Limit 1,000,000.00</h1>
        <h1 className="h-type">Enter Transfer Details</h1>
        <h1 className="t-type">From Account</h1>
        <form onSubmit={handSubmit}>
          <div className="div-dome">
            <input
              className="inputF"
              type="text"
              name="Adebit"
              value={formT[0].Adebit}
              placeholder=""
              onChange={handleChange2}
            />

            {formT[0].Adebit && (
              <h2 className="h2-h1T">Select account to debit</h2>
            )}
            <h2 className="h2-h2T" style={styleForm}>
              Select account to debit
            </h2>
            <div className="div-formT" style={formsDiv}></div>
          </div>
          <div className="div-dome">
            <input
              className="inputF"
              type="number "
              name="Daccount"
              value={formT[0].Daccount}
              placeholder=""
              onChange={handleChange2}
            />

            {formT[0].Daccount && (
              <h2 className="h2-h1T">Enter Destination Account</h2>
            )}
            <h2 className="h2-h2T" style={styleForm2}>
              Enter Destination Account
            </h2>
            {!show && <div className="div-formT" style={formsDiv2}></div>}
            {show && <div className="div-formTf"></div>}
            {show && <h3 className="h5-h5">{showT}</h3>}
          </div>
          <div className="div-dome">
            <input
              className="inputF"
              type="number"
              name="Eamount"
              value={formT[0].Eamount}
              placeholder=""
              onChange={handleChange2}
            />

            {formT[0].Eamount && <h2 className="h2-h1T">Enter Amount</h2>}
            <h2 className="h2-h2T" style={styleForm3}>
              Enter Amount
            </h2>
            <div className="div-formT" style={formsDiv3}></div>

            {show && <h3 className="h5-h5">{show2}</h3>}
          </div>
          <div className="div-dome">
            <input
              className="inputF"
              type="text"
              name="Enarration"
              value={formT[0].Enarration}
              placeholder=""
              onChange={handleChange2}
            />

            {formT[0].Enarration && <h2 className="h2-h1T">Enter Narration</h2>}
            <h2 className="h2-h2T" style={styleForm4}>
              Enter Narration
            </h2>
            <div className="div-formT" style={formsDiv4}></div>
          </div>
          <button className="save-btnT">CONTINUE</button>
        </form>
        <div>
          <div className="div-datht">{dathome}</div>
          <Linkbutt />
        </div>
      </div>
    </div>
  );
}
