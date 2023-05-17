import React ,{useEffect} from "react";
import "./Home.css";
import axios from 'axios' ;
import LoginForm from "./HomeRender";
import { useHistory } from "react-router-dom";


function Home(props) {
  const { onChangeLogin, onChangeInterest, Interest, loginData } = props;
  const updateLoginData = (event) =>
    onChangeLogin({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  const updateInterest = (e) => {
    onChangeInterest({
      ...Interest,
      [e.target.id]: e.target.checked,
    });
  };
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify(loginData));
    localStorage.setItem("Interest", JSON.stringify(Interest));
    history.push("/mentor");
  };

  useEffect(()=>{
    axios({
      method: "get",
      url: "/",
      baseURL: process.env.REACT_APP_BACKEND_URL,
    })
    .then((res)=>{
     console.log(res);
    })
    .catch((err)=>{
      console.log(err) ;
    })
  },[]) ;

  return (
    <div className="Home">
      <div className="containt">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4 description">
            <h2>
              WELCOME TO SENIOR JUNIOR{" "}
              <span class="colorchange">INTERACTION APP.</span>
            </h2>
            <h3>Fill out the form to contact your interest specialist.</h3>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4 form">
            <LoginForm
              loginData={loginData}
              Interest={Interest}
              handleSubmit={handleSubmit}
              updateLoginData={updateLoginData}
              updateInterest={updateInterest}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
