import React, { useState } from "react";
import { Date } from "./Date";
import Axios from "axios";
import "./SecondView.css";
import "./Second.css";

export const SecondView = ({ isVisible, data }) => {
  return (
    isVisible && (
      <div class="background">
        <div class="uploadphoto">
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
        <div class="header">
          <h2>နည်းပညာတက္ကသိုလ်(မိတ္ထီလာ)</h2>
          <br />
          <h2>ကျောင်းသားမှတ်ပုံတင်အခြေပြုပုံစံ</h2>
        </div>
        <form>
          <div className=" register-container">
            <div className="form-group">
              <label htmlFor="engname">ကျောင်းသား/သူအမည်(အင်္ဂလိပ်လို)</label>
              <input
                id="engname"
                defaultValue={data.engname}
                type="text"
                name="engname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nrc">နိုင်ငံသားစီစစ်‌ရေးအမှတ်</label>
              <input id="nrc" defaultValue={data.nrc} type="text" name="nrc" />
            </div>

            <div className="form-group">
              <label>မွေးသက္ကရာဇ်</label>
              <input
                type="date"
                name="birthDay"
                defaultValue={data.birthDay}
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
              />
            </div>

            <div className="form-group">
              <label htmlfor="seatno">၁၀ တန်းအောင်မြင်သည့်ခုံအမှတ်/ခုနစ်</label>
              <input
                id="seatno"
                defaultValue={data.seatno}
                type="text"
                name="seatno"
              />
            </div>

            <div className="form-group">
              <label htmlfor="score">၁၀ တန်းအမှတ်ပေါင်း</label>
              <input
                id="score"
                defaultValue={data.score}
                type="text"
                name="score"
              />
            </div>

            <div className="form-group">
              <label htmlfor="passedseat_no">
                (အောင်မြင်ခဲ့သည့်အတန်း-ခုံအမှတ်)
              </label>
              <input
                id="passedseat_no"
                defaultValue={data.passedseat_no}
                type="text"
                name="passedseat_no"
              />
            </div>

            <div className="form-group">
              <label htmlfor="currentseat_no">(ယခုသင်တန်း-ခုံအမှတ်)</label>
              <input
                id="currentseat_no"
                defaultValue={data.currentseat_no}
                type="text"
                name="currentseat_no"
              />
            </div>

            <div className="form-group">
              <label htmlfor="myanfathername">အဘအမည်(မြန်မာလို)</label>
              <input
                id="myanfathername"
                defaultValue={data.myanfathername}
                type="text"
                name="myanfathername"
              />
            </div>

            <div className="form-group">
              <label htmlfor="engfathername ">အဘအမည်(အင်္ဂလိပ်လို)</label>
              <input
                id="engfathername"
                defaultValue={data.engfathername}
                type="text"
                name="engfathername"
              />
            </div>

            <div className="form-group">
              <label htmlfor="fathernrc">အဘ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
              <input
                id="fathernrc"
                defaultValue={data.fathernrc}
                type="text"
                name="fathernrc"
              />
            </div>

            <div className="form-group">
              <label htmlfor="fathernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
              <input
                id="fathernation"
                defaultValue={data.fathernation}
                type="text"
                name="fathernation"
              />
            </div>

            <div className="form-group">
              <label htmlfor="fatherjob">အဘ၏အလုပ်အကိုင်</label>
              <input
                id="fatherjob"
                defaultValue={data.fatherjob}
                type="text"
                name="fatherjob"
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
              <label htmlFor="mothernrc">အမိ၏နိုင်ငံသားစီစစ်ရေးအမှတ်</label>
              <input
                id="mothernrc"
                defaultValue={data.mothernrc}
                type="text"
                name="mothernrc"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mothernation">လူမျိုး/ကိုးကွယ်သည့်ဘာသာ</label>
              <input
                id="mothernation"
                defaultValue={data.mothernation}
                type="text"
                name="mothernation"
              />
            </div>

            <div className="form-group">
              <label htmlFor="motherjob">အမိ၏အလုပ်အကိုင်</label>
              <input
                id="motherjob"
                defaultValue={data.motherjob}
                type="text"
                name="motherjob"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">
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
              <label htmlFor="phone_no">
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
              <label htmlFor="student_no">
                ကျောင်းသား/သူကျောင်း၀င်မှတ်ပုံတင်အမှတ်
              </label>
              <input
                id="student_no"
                defaultValue={data.student_no}
                type="text"
                name="student_no"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                defaultValue={data.email}
                type="text"
                name="email"
              />
            </div>
          </div>
        </form>
      </div>
    )
  );
};
