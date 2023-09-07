import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import { Navigationbar } from "../NavigationBar/NavigationBar";

import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar d-flex flex-column bg-db text-white p-4 vh-100">

          <hr className="text-secondary mt-2" />
          <ul className="nav nav-pills flex-column p-0 m-0">
            <li className="nav-item p-1">
              <Link to="/dashboard" className="nav-link text-white">
                <i className="bi bi-house me-2 fs-5"></i>
                <span className="fs-5">Dashboard</span>
              </Link>
            </li>

            <li className="nav-item p-1">
              <Link to="/newstudent" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Firstyear</span>
              </Link>
            </li>

            <li className="nav-item p-1">
              <Link to="/secondchoosemajors" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Secondyear</span>
              </Link>
            </li>

            <li className="nav-item p-1">
              <Link to="/thirdchoosemajors" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Thirdyear</span>
              </Link>
            </li>

            <li className="nav-item p-1">
              <Link to="/fourthchoosemajors" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Fourthyear</span>
              </Link>
            </li>

            <li className="nav-item p-1">
              <Link to="/fifthchoosemajors" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Fifthyear</span>
              </Link>
            </li>

            <li className="nav-item p-1">
              <Link to="/sixthchoosemajors" className="nav-link text-white">
                <i className="bi bi-people me-2 fs-5"></i>
                <span className="fs-5">Sixthyear</span>
              </Link>
            </li>
          </ul>
          <div>
            <hr className="text-secondary" />
            <Link to="/adminhome" className="nav-link text-white">
              <i className="bi bi-person fs-5"></i>
              <span className="fs-4">Log Out</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
