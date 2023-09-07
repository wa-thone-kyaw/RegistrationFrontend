import { Listrules } from "./Listrules";
import { Examrules } from "./Examrules";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Navigationbar } from "../NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Agreeform.css";
const Agreeform = () => {
  const [agree, setAgree] = useState(false);
  const checkboxHandler = () => {
    setAgree(!agree);
  };
  const location = useLocation();
  const dataPassedFromSecondYear = location.state;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/payment", { state: dataPassedFromSecondYear });
  };
  console.log("dataPassedFromSecondYear", dataPassedFromSecondYear);
  return (
    <>
      <div>
        <Navigationbar />
      </div>

      <h1>ကတိ၀န်ခံချက်</h1>
      <br />
      <h6>
        ကျွန်တော်/ကျွန်မတို့သည် အောက်ဖော်ပြပါစည်းကမ်းများကို
        သိရှိသဘောပေါက်ကြောင်း သဘောတူပါသည်။
      </h6>
      <br />
      <div className="rules">
        <Listrules />
        <Examrules />
      </div>
      <div className="check">
        <input type="checkbox" id="agree" onChange={checkboxHandler} />
        <strong>
          {" "}
          <label htmlFor="agree">
            အထက်ဖော်ပြပါစည်းကမ်းများကို သိရှိသဘောပေါက်နားလည်လက်ခံပါသဖြင့်
            ကျွန်တော်/မ သည် တသွေမသိမ်း လိုက်နာပါမည်။
          </label>
        </strong>
      </div>
      <form onSubmit={handleSubmit}>
        <button className="agree_btn" disabled={!agree}>
          Continue
        </button>
      </form>
    </>
  );
};
export default Agreeform;
