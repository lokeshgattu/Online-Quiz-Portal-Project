import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Popup from "reactjs-popup";
import QuestionsPopup from "./QuestionsPopup"; // Import the QuestionsPopup component

function HomePage() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage the popup visibility

  const adminSignUp = (e) => {
    e.preventDefault();
    navigate("/adminSignUp");
  };
  const adminLogin = (e) => {
    e.preventDefault();
    navigate("/adminLogin");
  };

  const userSignUp = (e) => {
    e.preventDefault();
    navigate("/userSignIn");
  };
  const UserLogin = (e) => {
    e.preventDefault();
    navigate("/userLogin");
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="mcqcontainer">
        <img
          className="mcqlogo"
          src="https://static.vecteezy.com/system/resources/previews/010/166/838/original/mcq-letter-technology-logo-design-on-white-background-mcq-creative-initials-letter-it-logo-concept-mcq-letter-design-vector.jpg"
        />
        <div className="popupflexing">
          <div>
            <Popup
              className="popupbgcolour"
              trigger={
                <button type="button" className="mcqbutton">
                  SignUp
                </button>
              }
              position="bottom right"
            >
              <div className="popupcontainer">
                <button className="signupbutton" onClick={(e) => userSignUp(e)}>
                  UserSignUp
                </button>
                <button
                  className="signupbutton"
                  onClick={(e) => adminSignUp(e)}
                >
                  AdminSignUp
                </button>
              </div>
            </Popup>
          </div>
          <div>
            <Popup
              trigger={
                <button type="button" className="mcqbutton">
                  LogIn
                </button>
              }
              position="bottom right"
            >
              <div className="popupcontainer">
                <button className="signupbutton" onClick={(e) => UserLogin(e)}>
                  UserLogIn
                </button>
                <button className="signupbutton" onClick={(e) => adminLogin(e)}>
                  AdminLogIn
                </button>
              </div>
            </Popup>
          </div>
        </div>
      </div>
      <div className="mcqcontainer1">
        <div className="headingContainer">
          <h1 className="quizHeading">
            Test Your Knowledge Here! Welcome to Online Quiz Portal.
          </h1>
          <button className="mcqbutton1" onClick={openPopup}>
            Demo Test
          </button>
        </div>
        <div>
          <img
            className="mcqimage"
            src="https://cdn.scoreapp.com/site/uploads/2024/06/Best-quiz-platforms-for-engagement-and-learning.png"
            style={{ width: "600px" }}
          />
        </div>
      </div>
      <div className="mcqcontainer2"></div>

      {/* Add the QuestionsPopup component here */}
      <QuestionsPopup open={isPopupOpen} onClose={closePopup} />
    </>
  );
}

export default HomePage;
