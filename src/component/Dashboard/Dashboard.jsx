import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap-icons/fonts/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Sidebar } from "./Sidebar";
import { AdminNavBar2 } from "../AdminNavBar/AdminNavBar2";
export const Dashboard = () => {
  return (
    <>
      <div>
        <AdminNavBar2 />
      </div>
      <div className="dashboardbar">
        <div className="col-auto"></div>
        <Sidebar />
      </div>
    </>
  );
};
