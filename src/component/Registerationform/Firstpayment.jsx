import React, { useState, useEffect } from "react";
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Navigationbar } from "../NavigationBar/NavigationBar";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import "./FirstPayment.css";
export const Firstpayment = () => {
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("submit-btn-popup");
    alert(
      `Your payment successfull.
    Welcome to Technological University Meiktila!`
    );
  };
  const location = useLocation();
  //const inputRef = useRef(null);
  const dataPassedFormFirstYear = location.state;
  console.log("dataPassedFormFirstYear", dataPassedFormFirstYear);
  //const inputRef = useRef(null);
  const [fee, setFee] = useState("");
  const [myanname, setMyanname] = useState("");
  const [engname, setEngname] = useState("");
  const [nrc, setNrc] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [nation, setNation] = useState("");
  const [seatno, setSeatNo] = useState("");
  const [score, setScore] = useState("");
  const [department, setDepartment] = useState("");
  const [myanfathername, setMyanFatherName] = useState("");
  const [engfathername, setEngFatherName] = useState("");
  const [fathernrc, setFatherNrc] = useState("");
  const [fathernation, setFatherNation] = useState("");
  const [fatherjob, setFatherJob] = useState("");
  const [mothername, setMotherName] = useState("");
  const [mothernrc, setMotherNrc] = useState("");
  const [mothernation, setMotherNation] = useState("");
  const [motherjob, setMotherJob] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");
  const [selectedValue5, setSelectedValue5] = useState("");

  const handleFeeChange = (e) => {
    setFee(e.target.value);
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    if (dataPassedFormFirstYear && formSubmitted) {
      const formData = new FormData();
      formData.append("myanname", dataPassedFormFirstYear.myanname);
      formData.append("engname", dataPassedFormFirstYear.engname);
      formData.append("nrc", dataPassedFormFirstYear.nrc);
      formData.append("birthDay", dataPassedFormFirstYear.birthDay);
      formData.append("nation", dataPassedFormFirstYear.nation);
      formData.append("seatno", dataPassedFormFirstYear.seatno);
      formData.append("department", dataPassedFormFirstYear.department);
      formData.append("score", dataPassedFormFirstYear.score);
      formData.append("myanfathername", dataPassedFormFirstYear.myanfathername);
      formData.append("engfathername", dataPassedFormFirstYear.engfathername);
      formData.append("fathernrc", dataPassedFormFirstYear.fathernrc);
      formData.append("fathernation", dataPassedFormFirstYear.fathernation);
      formData.append("fatherjob", dataPassedFormFirstYear.fatherjob);
      formData.append("mothername", dataPassedFormFirstYear.mothername);
      formData.append("mothernrc", dataPassedFormFirstYear.mothernrc);
      formData.append("mothernation", dataPassedFormFirstYear.mothernation);
      formData.append("motherjob", dataPassedFormFirstYear.motherjob);
      formData.append("address", dataPassedFormFirstYear.address);
      formData.append("phone_no", dataPassedFormFirstYear.phone_no);
      formData.append("email", dataPassedFormFirstYear.email);
      formData.append("photo", dataPassedFormFirstYear.photo);
      formData.append("selectedValue", dataPassedFormFirstYear.selectedValue);
      formData.append("selectedValue2", dataPassedFormFirstYear.selectedValue2);
      formData.append("selectedValue3", dataPassedFormFirstYear.selectedValue3);
      formData.append("selectedValue4", dataPassedFormFirstYear.selectedValue4);
      formData.append("selectedValue5", dataPassedFormFirstYear.selectedValue5);
      formData.append("fee", fee);
      Axios.post(
        "http://127.0.0.1:8000/student_registration/match_burmese_data_first_year",
        formData
      )
        .then((response) => {
          alert(
            `You registered successfully! Then click Next button and read the university rules.`
          );

          console.log("Data sent successfully:", response.data);
        })
        .catch((error) => {
          alert("Your registration was not successfully.Please Retry!");
          window.location.href = "/firstyear";
          console.error("Error sending data:", error);
        });
    }
  }, [dataPassedFormFirstYear, formSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set the formSubmitted state to true to trigger the Axios request
    setFormSubmitted(true);
    window.location.href = "/";
  };

  return (
    <>
      <div>
        <Navigationbar />
      </div>
      <br />
      <div>
        {" "}
        <b>
          <h2>ကျောင်းအပ်ခ ပေးသွင်းရန်</h2>
        </b>
      </div>

      <br />
      <br />
      <div class="fee">
        <table>
          <tbody>
            <tr>
              <td>မှတ်ပုံတင်‌ကြေး</td>
              <td>၂၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>ကျောင်းလခ</td>
              <td>၃၀၀၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>ဓါတ်ခွဲခန်းကြေး</td>
              <td>၅၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>စာကြည့်တိုက်ကြေး</td>
              <td>၃၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>အားကစားကြေး</td>
              <td>၁၀၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>စာမေးပွဲကြေး</td>
              <td>၂၅၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>အောင်လက်မှတ်ကြေး</td>
              <td></td>
            </tr>
            <tr>
              <td>အမှတ်စာရင်းကြေး</td>
              <td></td>
            </tr>
            <tr>
              <td>Grading ကြေး</td>
              <td></td>
            </tr>
            <tr>
              <td>True Copy ကြေး</td>
              <td> </td>
            </tr>
            <tr>
              <td>စုစုပေါင်း</td>
              <td>၃၄၅၀၀ ကျပ်</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div class="kpay">
          <br />
          <b>
            <h4>KBZ Pay ဖြင့် ငွေပေးချေရန်</h4>
          </b>
          <b>
            <p>ငွေလွှဲရမည့်ဖုန်းနံပါတ်:09778985088</p>
          </b>

          <div className="form-group">
            <div>
              <b>
                <label htmlfor="fee">Transaction No ထည့်ရန်👇</label>
              </b>
              <input
                onChange={handleFeeChange}
                id="fee"
                value={fee}
                type="text"
                name="fee"
                maxLength={20}
                required
              />
            </div>
            <button className="payment_btn" onClick={popup} required>
              Submit
            </button>
          </div>
        </div>
      </form>
      <br />
      <br />
    </>
  );
};
