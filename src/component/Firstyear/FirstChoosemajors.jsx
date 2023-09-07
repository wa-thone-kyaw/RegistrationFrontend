import { Link } from "react-router-dom";
import React from "react";
import { AdminNavBar2 } from "../AdminNavBar/AdminNavBar2";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
//import { Sidebar } from './Sidebar';

export const FirstChoosemajors = () => {
  return (
    <>
      <div>
        {" "}
        <AdminNavBar2 />
      </div>
      <div class="choosemajoradm">
        <h1>Choose Major</h1>
        <div class="year">
          <div class="left">
            <div>
              <Link to="/firstcivil">
                <button class="first">CIVIL</button>
              </Link>
            </div>

            <div>
              <Link to="/firstec">
                <button class="second">ELECTRONICS</button>
              </Link>
            </div>

            <div>
              <Link to="/firstme">
                <button class="third">MECHNICAL</button>
              </Link>
            </div>

            <div>
              <Link to="/dashboard">
                <MdOutlineKeyboardDoubleArrowLeft
                  className="backPage"
                  color="blue"
                  size={60}
                />
              </Link>
            </div>
          </div>

          <div class="right">
            <div>
              <Link to="/firstep">
                <button class="fourth">ELECTRICAL POWER</button>
              </Link>
            </div>

            <div>
              <Link to="/firstit">
                <button class="fifth">INFORMATION TECHNOLOGY</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
