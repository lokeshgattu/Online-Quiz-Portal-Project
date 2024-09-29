import "./App.css";
import HomePage from "./online-assessment-project/HomePage/HomePage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSignIn from "./online-assessment-project/AdminSignIn/AdminSignIn.js";
import AdminLogin from "./online-assessment-project/AdminLogin/AdminLogin.js";
import AdminDashboardFunction from "./online-assessment-project/AdminDashboardFunction/AdminDashboardFunction.js";
import UserSignIn from "./online-assessment-project/UserSignIn/UserSignIn.js";
import UserLogin from "./online-assessment-project/UserLogIn/UserLogin.js";
import UserDashboardFunction from "./online-assessment-project/UserDashboard/UserDashboard.js";
import CreateQuiz from "./online-assessment-project/CreateQuiz/CreateQuiz.js";
import Language from "./online-assessment-project/Language/Language.js";
import Qs from "./online-assessment-project/Qsf/Qs.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/adminSignUp"
            element={<AdminSignIn></AdminSignIn>}
          ></Route>
          <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
          <Route
            path="/adminDashBoard/:username/:id"
            element={<AdminDashboardFunction></AdminDashboardFunction>}
          ></Route>
          <Route
            path="/createQuiz/:qs1/:language/:adminId"
            element={<CreateQuiz></CreateQuiz>}
          ></Route>
          <Route path="/userSignIn" element={<UserSignIn></UserSignIn>}></Route>
          <Route path="/userLogin" element={<UserLogin></UserLogin>}></Route>
          <Route
            path="/userDashBoard/:name/:userId"
            element={<UserDashboardFunction></UserDashboardFunction>}
          ></Route>
          <Route
            path="/language/:langName/:adminId/:UserId"
            element={<Language></Language>}
          ></Route>
          <Route path="/Qs" element={<Qs></Qs>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
