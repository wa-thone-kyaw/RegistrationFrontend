import React, { useEffect, useState } from "react";
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Navigationbar } from "../NavigationBar/NavigationBar";
import Axios from "axios";
import { useLocation } from "react-router-dom";
const Payment = () => {
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
  const dataPassedFormSecondYear = location.state;
  console.log("dataPassedFormSecondYear", dataPassedFormSecondYear);
  const [myanname, setMyanname] = useState("");
  const [engname, setEngname] = useState("");
  const [nrc, setNrc] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [nation, setNation] = useState("");
  const [seatno, setSeatNo] = useState("");
  const [score, setScore] = useState("");
  const [passedseat_no, setPassedSeatNo] = useState("");
  const [currentseat_no, setCurrentSeatNo] = useState("");
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
  const [student_no, setStudentNo] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setImage] = useState("");
  const [fee, setFee] = useState("");

  const handleEngNameChange = (e) => {
    setEngname(e.target.value);
  };
  const handleSeatNoChange = (e) => {
    setCurrentSeatNo(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFeeChange = (e) => {
    setFee(e.target.value);
  };
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    if (dataPassedFormSecondYear && formSubmitted) {
      const formData = new FormData();
      formData.append("myanname", dataPassedFormSecondYear.myanname);
      formData.append("engname", dataPassedFormSecondYear.engname);
      formData.append("nrc", dataPassedFormSecondYear.nrc);
      formData.append("birthDay", dataPassedFormSecondYear.birthDay);
      formData.append("nation", dataPassedFormSecondYear.nation);
      formData.append("seatno", dataPassedFormSecondYear.seatno);
      formData.append("score", dataPassedFormSecondYear.score);
      formData.append("passedseat_no", dataPassedFormSecondYear.passedseat_no);
      formData.append(
        "currentseat_no",
        dataPassedFormSecondYear.currentseat_no
      );
      formData.append(
        "myanfathername",
        dataPassedFormSecondYear.myanfathername
      );
      formData.append("engfathername", dataPassedFormSecondYear.engfathername);
      formData.append("fathernrc", dataPassedFormSecondYear.fathernrc);
      formData.append("fathernation", dataPassedFormSecondYear.fathernation);
      formData.append("fatherjob", dataPassedFormSecondYear.fatherjob);
      formData.append("mothername", dataPassedFormSecondYear.mothername);
      formData.append("mothernrc", dataPassedFormSecondYear.mothernrc);
      formData.append("mothernation", dataPassedFormSecondYear.mothernation);
      formData.append("motherjob", dataPassedFormSecondYear.motherjob);
      formData.append("address", dataPassedFormSecondYear.address);
      formData.append("phone_no", dataPassedFormSecondYear.phone_no);
      formData.append("student_no", dataPassedFormSecondYear.student_no);
      formData.append("email", dataPassedFormSecondYear.email);
      formData.append("photo", dataPassedFormSecondYear.photo);
      formData.append("fee", fee);
      Axios.post(
        "http://127.0.0.1:8000/student_registration/match_burmese_data",
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
          window.location.href = "/overfirstyear";
          console.error("Error sending data:", error);
        });
    }
  }, [dataPassedFormSecondYear, formSubmitted]);

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
            <h4>KBZ pay ဖြင့်ငွေပေးချေရန်</h4>
          </b>
          <b>
            {" "}
            <p> ငွေလွှဲရမည့်ဖုန်းနံပါတ်:09778985088</p>
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

export default Payment;
