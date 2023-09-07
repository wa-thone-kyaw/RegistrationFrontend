import React, { useRef, useState } from "react";
import Axios from "axios";
import { Navigationbar } from "./NavigationBar";
import "./Contactus.css";
import emailjs from "@emailjs/browser";

export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2bwhmmk",
        "template_xl46vlc",
        form.current,
        "r4yucs4VcYhAnQr55"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Navigationbar />
      <br />
      <h1>Contact Us</h1>
      <div className="x">
        <div class="row mt-5">
          <div class="c">
            <div class="col ml-5">
              <h3 className="color_sec">Get in touch</h3>
              <adddress>
                <strong>Address : Win Zin 17-B(TU-Meiktila)</strong>
                <br />
                <br />
                <p>
                  <strong>Phone : 09778985088</strong>
                </p>
              </adddress>
            </div>
          </div>{" "}
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact_form w-100">
          <div class="col mr-35">
            <div className="row">
              <div className="col-lg-6">
                <input
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Full Name"
                  type="text"
                />
              </div>
              <div className="col-lg-6">
                <input
                  className="form-control"
                  id="name"
                  name="roll_no"
                  placeholder="Roll no"
                  type="text"
                />
              </div>
              <div className="col-lg-6">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-9">
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="message"
                  rows="7"
                  cols="2"
                ></textarea>
                <br />
              </div>
            </div>
            <div className="row mt-3  ml-3">
              <div className="col-sm-2">
                <button class="btn ac_btn bg-primary text-white" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
