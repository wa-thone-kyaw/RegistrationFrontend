import React, { useRef, useState } from "react";
import { Navigationbar } from "../NavigationBar/NavigationBar";
//import { Imageupload } from "./Imageupload";
import "./Firstyear.css";
import { Link } from "react-router-dom";
import { Date } from "./Date";
import { Currentdate } from "./Currentdate";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export const Firstyear = () => {
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
  const myanname_pattern = /^[\u1000-\u109f]+$/;
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [emailError, setEmailError] = useState("");
  const [errors, setErrors] = useState({});
  const [nrcError, setNrcError] = useState("");
  const [nrcFatherError, setFatherNrcError] = useState("");
  const [nrcMotherError, setMotherNrcError] = useState("");
  const nrc_pattern = /^[0-9]\/[A-Za-z]+\(N\)\d{6,}$/;

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");
  const [selectedValue5, setSelectedValue5] = useState("");

  const inputRef = useRef(null);
  const [photo, setImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };

  const options = [
    "",
    "Civil",
    "Electronics",
    "Electrical Power",
    "Mechanical",
    "Information Technology",
  ];

  const onOptionChangeHandler1 = (event) => {
    setSelectedValue(event.target.value);
    console.log("Selected major:", event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    setSelectedValue2(event.target.value);
    console.log("Selected major:", event.target.value);
  };
  const onOptionChangeHandler3 = (event) => {
    setSelectedValue3(event.target.value);
    console.log("Selected major:", event.target.value);
  };
  const onOptionChangeHandler4 = (event) => {
    setSelectedValue4(event.target.value);
    console.log("Selected major:", event.target.value);
  };
  const onOptionChangeHandler5 = (event) => {
    setSelectedValue5(event.target.value);
    console.log("Selected major:", event.target.value);
  };

  const handleMyanNameChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input is empty
    if (inputValue === "") {
      setMyanname(""); // Clear the myanname state
      setErrors({
        ...errors,
        myanname: "", // Clear any previous error
      });
    } else if (myanname_pattern.test(inputValue)) {
      setMyanname(inputValue);
      setErrors({
        ...errors,
        myanname: "", // Clear any previous error
      });
    } else {
      setErrors({
        ...errors,
        myanname: "Enter a valid Myanmar name",
      });
    }
  };

  const handleMyFatherNameChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input is empty
    if (inputValue === "") {
      setMyanFatherName(""); // Clear the myanname state
      setErrors({
        ...errors,
        myanfathername: "", // Clear any previous error
      });
    } else if (myanname_pattern.test(inputValue)) {
      setMyanFatherName(inputValue);
      setErrors({
        ...errors,
        myanfathername: "", // Clear any previous error
      });
    } else {
      setErrors({
        ...errors,
        myanfathername: "Enter a valid Myanmar name",
      });
    }
  };
  const handleEngNameChange = (e) => {
    setEngname(e.target.value);
  };
  const handleNrcChange = (e) => {
    const inputValue = e.target.value;
    setNrc(inputValue); // Update email state

    // Check if the input is empty
    if (inputValue === "") {
      setNrcError(""); // Clear the email error
    } else {
      // Run email validation
      if (nrc_pattern.test(inputValue)) {
        setNrcError(""); // Clear the email error
      } else {
        setNrcError("*Enter a valid NRC");
      }
    }
  };

  const handleNationChange = (e) => {
    setNation(e.target.value);
  };
  const handleBirthDayChange = (e) => {
    setBirthDay(e.target.value);
  };
  const handleSeatNoChange = (e) => {
    setSeatNo(e.target.value);
  };
  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleEngFatherNameChange = (e) => {
    setEngFatherName(e.target.value);
  };
  const handleFatherNrcChange = (e) => {
    const inputValue = e.target.value;
    setFatherNrc(inputValue); // Update email state

    // Check if the input is empty
    if (inputValue === "") {
      setFatherNrcError(""); // Clear the email error
    } else {
      // Run email validation
      if (nrc_pattern.test(inputValue)) {
        setFatherNrcError(""); // Clear the email error
      } else {
        setFatherNrcError("*Enter a valid NRC");
      }
    }
  };
  const handleFatherNationChange = (e) => {
    setFatherNation(e.target.value);
  };
  const handleFatherJobChange = (e) => {
    setFatherJob(e.target.value);
  };
  const handleMotherNameChange = (e) => {
    setMotherName(e.target.value);
  };
  const handleMotherNrcChange = (e) => {
    const inputValue = e.target.value;
    setMotherNrc(inputValue); // Update email state

    // Check if the input is empty
    if (inputValue === "") {
      setMotherNrcError(""); // Clear the email error
    } else {
      // Run email validation
      if (nrc_pattern.test(inputValue)) {
        setMotherNrcError(""); // Clear the email error
      } else {
        setMotherNrcError("*Enter a valid NRC");
      }
    }
  };
  const handleMotherNationChange = (e) => {
    setMotherNation(e.target.value);
  };
  const handleMotherJobChange = (e) => {
    setMotherJob(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue); // Update email state

    // Check if the input is empty
    if (inputValue === "") {
      setEmailError(""); // Clear the email error
    } else {
      // Run email validation
      if (email_pattern.test(inputValue)) {
        setEmailError(""); // Clear the email error
      } else {
        setEmailError("*Enter a valid email address");
      }
    }
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToPass = {
      myanname,
      engname,
      nrc,
      birthDay,
      nation,
      seatno,
      score,
      department,
      myanfathername,
      engfathername,
      fathernrc,
      fathernation,
      fatherjob,
      mothername,
      mothernrc,
      mothernation,
      motherjob,
      address,
      phone_no,
      email,
      photo,
      selectedValue,
      selectedValue2,
      selectedValue3,
      selectedValue4,
      selectedValue5,
    };
    navigate("/firstagreeform", { state: dataToPass });
  };

  return (
    <>
      <div>
        <Navigationbar />
      </div>

      <form onSubmit={handleSubmit}>
        <div class="background1">
          <div class="uploadphoto">
            <div className="image-upload-container">
              <div className="box-decoration">
                <div
                  onClick={() => inputRef.current.click()}
                  style={{ cursor: "pointer" }}
                >
                  {photo ? (
                    <img
                      src={URL.createObjectURL(photo)}
                      class="rounded"
                      width="160"
                      height="160"
                    />
                  ) : (
                    <img
                      src={"./upload.jpg"}
                      alt=""
                      class="rounded"
                      width="160"
                      height="160"
                    />
                  )}

                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="img"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="header">
            <h2>ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်</h2>
            <h2>သိပ္ပံနှင့်နည်းပညာဝန်ကြီးဌာန</h2>
            <h2>အဆင့်မြင့်သိပ္ပံနှင့်နည်းပညာဦးစီးဌာန</h2>
            <h2 class="tumtla">နည်းပညာတက္ကသိုလ်(မိတ္ထီလာ)</h2>
            <h2>ကျောင်းသားမှတ်ပုံတင်အခြေပြုပုံစံ</h2>

            <p>
              ရက်စွဲ <Currentdate />
            </p>
          </div>

          <div className=" register-container">
            <div class="form-group">
              <label htmlFor="myanname">ကျောင်းသား/သူအမည်(မြန်မာလို)</label>
              <input
                onChange={handleMyanNameChange}
                id="myanname"
                value={myanname}
                type="text"
                name="myanname"

                //required
              />
            </div>

            <div className="form-group">
              <label htmlFor="engname">ကျောင်းသား/သူအမည်(အင်္ဂလိပ်လို)</label>
              <input
                onChange={handleEngNameChange}
                id="engname"
                value={engname}
                type="text"
                name="engname"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="nrc">နိုင်ငံသားစီစစ်‌ရေးအမှတ်</label>
              <input
                onChange={handleNrcChange}
                id="nrc"
                value={nrc}
                type="text"
                name="nrc"
                //required
              />
              {nrcError && <div className="error-message">{nrcError}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="birthDay">မွေးသက္ကရာဇ်</label>
              <input
                type="date"
                name="birthDay"
                value={birthDay}
                onChange={handleBirthDayChange}
                id="birthDay"
              />
            </div>

            <div className="form-group">
              <label htmlfor="nation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
              <input
                onChange={handleNationChange}
                id="nation"
                value={nation}
                type="text"
                name="nation"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="seatno">၁၀ တန်းအောင်မြင်သည့်ခုံအမှတ်/ခုနစ်</label>
              <input
                onChange={handleSeatNoChange}
                id="seatno"
                value={seatno}
                type="text"
                name="seatno"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="score">၁၀ တန်းအမှတ်ပေါင်း</label>
              <input
                onChange={handleScoreChange}
                id="score"
                value={score}
                type="text"
                name="score"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="department">စာစစ်ဌာန</label>
              <input
                onChange={handleDepartmentChange}
                id="department"
                value={department}
                type="text"
                name="department"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="myanfathername">အဘအမည်(မြန်မာလို)</label>
              <input
                onChange={handleMyFatherNameChange}
                id="myanfathername"
                value={myanfathername}
                type="text"
                name="myanfathername"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="engfathername ">အဘအမည်(အင်္ဂလိပ်လို)</label>
              <input
                onChange={handleEngFatherNameChange}
                id="engfathername"
                value={engfathername}
                type="text"
                name="engfathername"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="fathernrc">အဘ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
              <input
                onChange={handleFatherNrcChange}
                id="fathernrc"
                value={fathernrc}
                type="text"
                name="fathernrc"
                //required
              />
              {nrcFatherError && (
                <div className="error-message">{nrcFatherError}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlfor="fathernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
              <input
                onChange={handleFatherNationChange}
                id="fathernation"
                value={fathernation}
                type="text"
                name="fathernation"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="fatherjob">အဘ၏အလုပ်အကိုင်</label>
              <input
                onChange={handleFatherJobChange}
                id="fatherjob"
                value={fatherjob}
                type="text"
                name="fatherjob"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="mothername">အမိအမည်</label>
              <input
                onChange={handleMotherNameChange}
                id="mothername"
                value={mothername}
                type="text"
                name="mothername"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="mothernrc">အမိ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
              <input
                onChange={handleMotherNrcChange}
                id="mothernrc"
                value={mothernrc}
                type="text"
                name="mothernrc"
                //required
              />
              {nrcMotherError && (
                <div className="error-message">{nrcMotherError}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlfor="mothernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
              <input
                onChange={handleMotherNationChange}
                id="mothernation"
                value={mothernation}
                type="text"
                name="mothernation"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="motherjob">အမိ၏အလုပ်အကိုင်</label>
              <input
                onChange={handleMotherJobChange}
                id="motherjob"
                value={motherjob}
                type="text"
                name="motherjob"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="address">
                မိဘနေရပ်လိပ်စာအပြည့်အစုံ/ဖုန်းနံပါတ်
              </label>
              <input
                onChange={handleAddressChange}
                id="address"
                value={address}
                type="text"
                name="address"
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="phone_no">
                လွယ်ကူစွာဆက်သွယ်နိုင်သည့်လိပ်စာ/ဖုန်းနံပါတ်
              </label>
              <input
                onChange={handlePhoneNoChange}
                id="phone_no"
                value={phone_no}
                type="text"
                name="phone_no"
                maxLength={11}
                //required
              />
            </div>

            <div className="form-group">
              <label htmlfor="email">Email</label>
              <input
                onChange={handleEmailChange}
                id="email"
                value={email}
                type="email"
                name="email"
                //required
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>

            <div class="courses">
              <br />
              <br />
              <h2>ဖွင့်လှစ်မည့်သင်တန်းများ</h2>
              <br />
              <div>
                <ol>
                  <li>Civil(မြို့ပြသင်တန်း)</li>
                  <li>Electronics(အီလက်ထရောနစ်)</li>
                  <li>Electrical Power(လျှပ်စစ်စွမ်းအား)</li>
                  <li>Mechanical(စက်မှုစွမ်းအား)</li>
                  <li>Information Technology(သုတနည်းပညာ)</li>
                </ol>
              </div>
              <br />
              <br />
              <h2>
                တက်‌ရောက်လိုသောသင်တန်း(ကွက်လက်အားလုံးပြည့်စုံစွာဖြည့်စွက်ပါရန်)
              </h2>
              <br />
              <div>
                <ul>
                  <li>
                    ပထမဦးစားပေး{" "}
                    <select
                      value={selectedValue}
                      onChange={onOptionChangeHandler1}
                    >
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </li>
                  <br />
                  <li>
                    ဒုတိယဦးစားပေး{" "}
                    <select
                      value={selectedValue2}
                      onChange={onOptionChangeHandler2}
                    >
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </li>
                  <br />
                  <li>
                    တတိယဦးစားပေး{" "}
                    <select
                      value={selectedValue3}
                      onChange={onOptionChangeHandler3}
                    >
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </li>
                  <br />
                  <li>
                    စတုတ္ထဦးစားပေး{" "}
                    <select
                      value={selectedValue4}
                      onChange={onOptionChangeHandler4}
                    >
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </li>
                  <br />
                  <li>
                    ပဥ္စမဦးစားပေး{" "}
                    <select
                      value={selectedValue5}
                      onChange={onOptionChangeHandler5}
                    >
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </li>
                </ul>
              </div>
              <br />
            </div>

            <div>
              <button class="submit-btn" type="submit" required>
                Submit
              </button>
            </div>
            <div>
              {" "}
              <Link to={"/chooseyear"}>
                <MdOutlineKeyboardDoubleArrowLeft
                  className="backPage"
                  color="blue"
                  size={60}
                />
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
