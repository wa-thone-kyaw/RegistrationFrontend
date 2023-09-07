import { Routes, Route } from "react-router-dom";
import { Contactus } from "./component/NavigationBar/Contactus";
import { SignIn } from "./component/SignInSignUp/SignIn";
import { SignUp } from "./component/SignInSignUp/SignUp";
import { Dashboard } from "./component/Dashboard/Dashboard";
import { Firstpayment } from "./component/Registerationform/Firstpayment";
import Payment from "./component/Registerationform/Payment";

import { About } from "./component/NavigationBar/About";
import { Home } from "./component/NavigationBar/Home";
import { AdminHome } from "./component/AdminNavBar/AdminHome";
import { Chooseyear } from "./component/Chooseyear/Chooseyear";
import { Firstyear } from "./component/Registerationform/Firstyear";
import { OverFirstYear } from "./component/Registerationform/OverFirstYear";

import Agreeform from "./component/Registerationform/Agreeform";
import { Firstagreeform } from "./component/Registerationform/Firstagreeform";
import { Choosemajor } from "./component/Registerationform/Choosemajor";
import { FillID } from "./component/Registerationform/FillID";
import { AdminNavBar } from "./component/AdminNavBar/AdminNavBar";
import { AdminNavBar2 } from "./component/AdminNavBar/AdminNavBar2";

import { FirstChoosemajors } from "./component/Firstyear/FirstChoosemajors";
import { FirstView } from "./component/Firstyear/FirstView";
import { FirstCivil } from "./component/Firstyear/FirstCivil";
import { FirstEC } from "./component/Firstyear/FirstEC";
import { FirstEP } from "./component/Firstyear/FirstEP";
import { FirstIT } from "./component/Firstyear/FirstIT";
import { FirstME } from "./component/Firstyear/FirstME";
import { Newstudent } from "./component/Firstyear/Newstudent";

import { SecondChoosemajors } from "./component/Secondyear/SecondChoosemajors";
import { SecondView } from "./component/Secondyear/SecondView";
import { SecondCivil } from "./component/Secondyear/SecondCivil";
import { SecondEC } from "./component/Secondyear/SecondEC";
import { SecondEP } from "./component/Secondyear/SecondEP";
import { SecondIT } from "./component/Secondyear/SecondIT";
import { SecondME } from "./component/Secondyear/SecondME";

import { ThirdChoosemajors } from "./component/Thirdyear/ThirdChoosemajors";
import { ThirdView } from "./component/Thirdyear/ThirdView";
import { ThirdCivil } from "./component/Thirdyear/ThirdCivil";
import { ThirdEC } from "./component/Thirdyear/ThirdEC";
import { ThirdEP } from "./component/Thirdyear/ThirdEP";
import { ThirdIT } from "./component/Thirdyear/ThirdIT";
import { ThirdME } from "./component/Thirdyear/ThirdME";

import { FourthChoosemajors } from "./component/Fourthyear/FourthChoosemajors";
import { FourthView } from "./component/Fourthyear/FourthView";
import { FourthCivil } from "./component/Fourthyear/FourthCivil";
import { FourthEC } from "./component/Fourthyear/FourthEC";
import { FourthEP } from "./component/Fourthyear/FourthEP";
import { FourthIT } from "./component/Fourthyear/FourthIT";
import { FourthME } from "./component/Fourthyear/FourthME";

import { FifthChoosemajors } from "./component/Fifthyear/FifthChoosemajors";
import { FifthView } from "./component/Fifthyear/FifthView";
import { FifthCivil } from "./component/Fifthyear/FifthCivil";
import { FifthEC } from "./component/Fifthyear/FifthEC";
import { FifthEP } from "./component/Fifthyear/FifthEP";
import { FifthIT } from "./component/Fifthyear/FifthIT";
import { FifthME } from "./component/Fifthyear/FifthME";

import { SixthChoosemajors } from "./component/Sixthyear/SixthChoosemajors";
import { SixthView } from "./component/Sixthyear/SixthView";
import { SixthCivil } from "./component/Sixthyear/SixthCivil";
import { SixthEC } from "./component/Sixthyear/SixthEC";
import { SixthEP } from "./component/Sixthyear/SixthEP";
import { SixthIT } from "./component/Sixthyear/SixthIT";
import { SixthME } from "./component/Sixthyear/SixthME";

import "./component/SignInSignUp/Card.css";
import "./component/SignInSignUp/SignIn.css";
import "./component/SignInSignUp/SignUp.css";

import "./component/NavigationBar/NavigationBar.css";
import "./component/NavigationBar/About.css";
import "./component/NavigationBar/Home.css";
import "./component/NavigationBar/Contactus.css";
import "./component/AdminNavBar/AdminNavBar.css";
import "./component/AdminNavBar/AdminHome.css";
import "./component/Chooseyear/Chooseyear.css";
import "./component/Registerationform/Firstyear.css";
import "./component/Registerationform/Overfirstyear.css";
import "./component/Registerationform/Agreeform.css";
import "./component/Registerationform/Payment.css";
import "./component/Registerationform/FirstPayment.css";

import "./component/Firstyear/First.css";
import "./component/Firstyear/FirstChoosemajors.css";
import "./component/Firstyear/FirstView.css";

import "./component/Secondyear/Second.css";
import "./component/Secondyear/SecondChoosemajors.css";
import "./component/Secondyear/SecondView.css";

import "./component/Thirdyear/Third.css";
import "./component/Thirdyear/ThirdChoosemajors.css";
import "./component/Thirdyear/ThirdView.css";

import "./component/Fourthyear/Fourth.css";
import "./component/Fourthyear/FourthChoosemajors.css";
import "./component/Fourthyear/FourthView.css";

import "./component/Fifthyear/Fifth.css";
import "./component/Fifthyear/FifthChoosemajors.css";
import "./component/Fifthyear/FifthView.css";

import "./component/Sixthyear/Sixth.css";
import "./component/Sixthyear/SixthChoosemajors.css";
import "./component/Sixthyear/SixthView.css";

export default function MyApp() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/firstpayment" element={<Firstpayment />} />
          <Route path="/adminnavbar" element={<AdminNavBar />} />
          <Route path="/adminnavbar2" element={<AdminNavBar2 />} />

          <Route path="/firstchoosemajors" element={<FirstChoosemajors />} />
          <Route path="/firstview" element={<FirstView />} />
          <Route path="/firstcivil" element={<FirstCivil />} />
          <Route path="/firstec" element={<FirstEC />} />
          <Route path="/firstep" element={<FirstEP />} />
          <Route path="/firstit" element={<FirstIT />} />
          <Route path="/firstme" element={<FirstME />} />
          <Route path="/newstudent" element={<Newstudent />} />

          <Route path="/secondchoosemajors" element={<SecondChoosemajors />} />
          <Route path="/secondview" element={<SecondView />} />
          <Route path="/secondcivil" element={<SecondCivil />} />
          <Route path="/secondec" element={<SecondEC />} />
          <Route path="/secondep" element={<SecondEP />} />
          <Route path="/secondit" element={<SecondIT />} />
          <Route path="/secondme" element={<SecondME />} />

          <Route path="/thirdchoosemajors" element={<ThirdChoosemajors />} />
          <Route path="/thirdview" element={<ThirdView />} />
          <Route path="/thirdcivil" element={<ThirdCivil />} />
          <Route path="/thirdec" element={<ThirdEC />} />
          <Route path="/thirdep" element={<ThirdEP />} />
          <Route path="/thirdit" element={<ThirdIT />} />
          <Route path="/thirdme" element={<ThirdME />} />

          <Route path="/fourthchoosemajors" element={<FourthChoosemajors />} />
          <Route path="/fourthview" element={<FourthView />} />
          <Route path="/fourthcivil" element={<FourthCivil />} />
          <Route path="/fourthec" element={<FourthEC />} />
          <Route path="/fourthep" element={<FourthEP />} />
          <Route path="/fourthit" element={<FourthIT />} />
          <Route path="/fourthme" element={<FourthME />} />

          <Route path="/fifthchoosemajors" element={<FifthChoosemajors />} />
          <Route path="/fifthview" element={<FifthView />} />
          <Route path="/fifthcivil" element={<FifthCivil />} />
          <Route path="/fifthec" element={<FifthEC />} />
          <Route path="/fifthep" element={<FifthEP />} />
          <Route path="/fifthit" element={<FifthIT />} />
          <Route path="/fifthme" element={<FifthME />} />

          <Route path="/sixthchoosemajors" element={<SixthChoosemajors />} />
          <Route path="/sixthview" element={<SixthView />} />
          <Route path="/sixthcivil" element={<SixthCivil />} />
          <Route path="/sixthec" element={<SixthEC />} />
          <Route path="/sixthep" element={<SixthEP />} />
          <Route path="/sixthit" element={<SixthIT />} />
          <Route path="/sixthme" element={<SixthME />} />

          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/chooseyear" element={<Chooseyear />} />
          <Route path="/firstyear" element={<Firstyear />} />
          <Route path="/overfirstyear" element={<OverFirstYear />} />

          <Route path="/agreeform" element={<Agreeform />} />
          <Route path="/firstagreeform" element={<Firstagreeform />} />
          <Route path="/choosemajor" element={<Choosemajor />} />
          <Route path="/fillId" element={<FillID />} />
        </Routes>
      </div>
    </>
  );
}
