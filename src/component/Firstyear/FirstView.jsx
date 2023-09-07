import React, { useState } from "react";
import { Date } from "./Date";
import Axios from "axios";
import "./First.css";
import "./FirstView.css";
import Currentdate from "../Registerationform/Currentdate";

export const FirstView = ({ isVisible, data }) => {
  return (
    isVisible && (
      <div class="background">
        <div className="uploadphoto">
          <div className="image-upload-container">
            <div className="box-decoration">
              <div>
                <img
                  src={
                    data.photo && data.photo.my_photo
                      ? `data:${data.photo.my_photo};base64,${data.photo.data}`
                      : "path/to/default-image.png"
                  }
                  alt="Student Photo"
                  class="rounded"
                  width="160"
                  height="160"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <h2>ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်</h2>
          <h2>သိပ္ပံနှင့်နည်းပညာဝန်ကြီးဌာန</h2>
          <h2>အဆင့်မြင့်သိပ္ပံနှင့်နည်းပညာဦးစီးဌာန</h2>
          <h2 class="tumtla">နည်းပညာတက္ကသိုလ်(မိတ္ထီလာ)</h2>
          <h2>ကျောင်းသားမှတ်ပုံတင်အခြေပြုပုံစံ</h2>
        </div>

        <div className=" register-container">
          <div className="form-group">
            <label htmlFor="myanname">ကျောင်းသား/သူအမည်(မြန်မာလို)</label>
            <input
              id="myanname"
              defaultValue={data.myanname}
              type="text"
              name="myanname"
            />
          </div>

          <div className="form-group">
            <label htmlfor="engname">ကျောင်းသား/သူအမည်(အင်္ဂလိပ်လို)</label>
            <input
              id="engname"
              defaultValue={data.engname}
              type="text"
              name="engname"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="nrc">နိုင်ငံသားစီစစ်‌ရေးအမှတ်</label>
            <input
              id="nrc"
              defaultValue={data.nrc}
              type="text"
              name="nrc"
              required
            />
          </div>

          <div className="form-group">
            <label>မွေးသက္ကရာဇ်</label>
            <input
              type="date"
              name="birthDay"
              value={data.birthDay}
              id="birthDay"
            />
          </div>

          <div className="form-group">
            <label htmlfor="nation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
            <input
              id="nation"
              defaultValue={data.nation}
              type="text"
              name="nation"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="seatno">၁၀ တန်းအောင်မြင်သည့်ခုံအမှတ်/ခုနစ်</label>
            <input
              id="seatno"
              defaultValue={data.seatno}
              type="text"
              name="seatno"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="score">၁၀ တန်းအမှတ်ပေါင်း</label>
            <input
              id="score"
              defaultValue={data.score}
              type="text"
              name="score"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="department">စာစစ်ဌာန</label>
            <input
              id="department"
              defaultValue={data.department}
              type="text"
              name="department"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="myanfathername">အဘအမည်(မြန်မာလို)</label>
            <input
              id="myanfathername"
              defaultValue={data.myanfathername}
              type="text"
              name="myanfathername"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="engfathername ">အဘအမည်(အင်္ဂလိပ်လို)</label>
            <input
              id="engfathername"
              defaultValue={data.engfathername}
              type="text"
              name="engfathername"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="fathernrc">အဘ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
            <input
              id="fathernrc"
              defaultValue={data.fathernrc}
              type="text"
              name="fathernrc"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="fathernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
            <input
              id="fathernation"
              defaultValue={data.fathernation}
              type="text"
              name="fathernation"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="fatherjob">အဘ၏အလုပ်အကိုင်</label>
            <input
              id="fatherjob"
              value={data.fatherjob}
              type="text"
              name="fatherjob"
              required
            />
          </div>

          <div className="form-group">
            <label htmlfor="mothername">အမိအမည်</label>
            <input
              id="mothername"
              defaultValue={data.mothername}
              type="text"
              name="mothername"
            />
          </div>

          <div className="form-group">
            <label htmlfor="mothernrc">အမိ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
            <input
              id="mothernrc"
              defaultValue={data.mothernrc}
              type="text"
              name="mothernrc"
            />
          </div>

          <div className="form-group">
            <label htmlfor="mothernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
            <input
              id="mothernation"
              defaultValue={data.mothernation}
              type="text"
              name="mothernation"
            />
          </div>

          <div className="form-group">
            <label htmlfor="motherjob">အမိ၏အလုပ်အကိုင်</label>
            <input
              id="motherjob"
              defaultValue={data.motherjob}
              type="text"
              name="motherjob"
            />
          </div>

          <div className="form-group">
            <label htmlfor="address">
              မိဘနေရပ်လိပ်စာအပြည့်အစုံ/ဖုန်းနံပါတ်
            </label>
            <input
              id="address"
              defaultValue={data.address}
              type="text"
              name="address"
            />
          </div>

          <div className="form-group">
            <label htmlfor="phone_no">
              လွယ်ကူစွာဆက်သွယ်နိုင်သည့်လိပ်စာ/ဖုန်းနံပါတ်
            </label>
            <input
              id="phone_no"
              defaultValue={data.phone_no}
              type="text"
              name="phone_no"
            />
          </div>

          <div className="form-group">
            <label htmlfor="email">Email</label>
            <input
              id="email"
              defaultValue={data.email}
              type="text"
              name="email"
            />
          </div>

          <div class="courses">
            <br />
            <br />
            <br />
            <h2>တက်‌ရောက်လိုသောသင်တန်း</h2>
            <br />
            <div>
              <ul>
                <li>
                  ပထမဦးစားပေး{" "}
                  <select defaultValue={data.selectedValue}>
                    <option value={data.selectedValue}>
                      {data.selectedValue}
                    </option>
                  </select>
                </li>
                <br />
                <li>
                  ဒုတိယဦးစားပေး{" "}
                  <select defaultValue={data.selectedValue2}>
                    <option value={data.selectedValue2}>
                      {data.selectedValue2}
                    </option>
                  </select>
                </li>
                <br />
                <li>
                  တတိယဦးစားပေး{" "}
                  <select defaultValue={data.selectedValue3}>
                    <option value={data.selectedValue3}>
                      {data.selectedValue3}
                    </option>
                  </select>
                </li>
                <br />
                <li>
                  စတုတ္ထဦးစားပေး{" "}
                  <select defaultValue={data.selectedValue4}>
                    <option value={data.selectedValue4}>
                      {data.selectedValue4}
                    </option>
                  </select>
                </li>
                <br />
                <li>
                  ပဥ္စမဦးစားပေး{" "}
                  <select defaultValue={data.selectedValue5}>
                    <option value={data.selectedValue5}>
                      {data.selectedValue5}
                    </option>
                  </select>
                </li>
              </ul>
            </div>
            <br />
          </div>
        </div>
      </div>
    )
  );
};
