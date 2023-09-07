import { Link } from "react-router-dom";
import React from "react";
//import It from '.public/It.png'
export const AdminNavBar2 = () => {
  return (
    <div class="admNavbar">
      <img src="./tulogo.jpg" alt="It" width={80} height={90} />

      <Link to="/adminhome">
        <li>ADMIN</li>
      </Link>

      <Link to="/signup">
        <li>SIGN UP</li>
      </Link>
    </div>
  );
};
