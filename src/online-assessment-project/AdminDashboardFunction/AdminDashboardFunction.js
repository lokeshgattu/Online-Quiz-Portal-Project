import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./AdminDashboardFunctional.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function AdminDashboardFunction() {
  const params = useParams();
  console.log("params", params);
  const [adminData, setadminData] = useState([]);
  const [errorqs, seterrorqs] = useState("");
  const [numofqs, setnumofqs] = useState("");
  // const [adminname,setadminname]=useState("")
  const [language, setlanguage] = useState("");
  const [languageerror, setlanguageerror] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/AdminDetails")
      .then((res) => {
        setadminData(res.data);
        console.log("res", res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const id = params.id;
  const filteredObject = adminData.filter((item) => item.id === id);
  let adminId = null;
  filteredObject.map((item) => {
    adminId = item.id;
  });
  //console.log("adminid",adminId)
  // console.log("filteredObjectIdis",adminId)
  const navigate = useNavigate();
  const handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "questions") {
      setnumofqs(e.target.value);
    }
    if (keyword === "lang") {
      setlanguage(e.target.value);
    }
  };
  const numberofquestions = (e) => {
    e.preventDefault();

    if (numofqs && language) {
      navigate(`/createQuiz/${numofqs}/${language}/${adminId}`);
    } else {
      if (!language) {
        setlanguageerror("please enter which language you wnat to create");
      }
      if (!numofqs) {
        seterrorqs("please enter how many questions you want to ceate");
      }
    }
  };
  const viewResult = (e) => {
    e.preventDefault();
    navigate("/Qs");
  };
  return (
    <div className="adminDahsBoardContainer">
      <h1 className="adminDashBoardHeadning">
        {" "}
        Welcome to Your DashBoard Admin!
      </h1>
      <div className="adminCardsContainer">
        <div className="adminDetailsCardContainer">
          {filteredObject.map((item) => (
            <div>
              {console.log("obj", filteredObject)}
              {console.log("filteritem", item)}
              <img src={item.image} className="adminImage" alt="no image" />
              <p className="adminDetails">Name: {item.adminname}</p>
              <p className="adminDetails">Email: {item.adminemail}</p>
              <p className="adminDetails">PhoneNumber: {item.phonenumber}</p>
            </div>
          ))}
        </div>
        <div className="quizizzContainer">
          <div>
            <Popup
              trigger={
                <Link>
                  <button
                    // style={{ width: 150, fontSize: 20 }}
                    style={{
                      width: "150px",
                      textDecoration: "underline",
                      fontSize: "22px",
                      color: "blue",
                    }}
                    type="button"
                    className="mcqbutton"
                  >
                    Create Quiz
                  </button>
                </Link>
              }
              position="bottom right"
            >
              <div className="popupcontainer">
                <div>
                  <div>
                    <label className="heading" htmlFor="questions">
                      Number of questions to be created:
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupname"
                      placeholder="Enter your no of questions you want to add"
                      onChange={(e) => handleChange(e, "questions")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      {errorqs}
                    </p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="questions">
                      Enter the language of Quiz :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupname"
                      placeholder="Enter your no of questions you want to add"
                      onChange={(e) => handleChange(e, "lang")}
                    />
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      {languageerror}
                    </p>
                  </div>
                  <div>
                    <Link>
                      <button
                        className="signupbutton"
                        onClick={(e) => numberofquestions(e)}
                      >
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
          <Link>
            <button
              // style={{ width: 150, fontSize: 20 }}
              style={{
                width: "150px",
                textDecoration: "underline",
                fontSize: "22px",
                color: "blue",
              }}
              type="button"
              className="mcqbutton"
              onClick={(e) => viewResult(e)}
            >
              View Result
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardFunction;
