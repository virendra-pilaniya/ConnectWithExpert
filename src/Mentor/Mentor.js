import React, {useEffect, useState} from "react";
import "./Mentor.css";
import WebDev from "./MentorComponent/Web";
import ApplicationDevop from "./MentorComponent/Application";
import CompetitiveProgramming from "./MentorComponent/Cp";
import MachineLearning from "./MentorComponent/Ml";
import DeepLearning from "./MentorComponent/Dl";
import Menu from '../menu/menu.js' ;
import axios from "axios";

const Mentor = (props) => {
  const [mentorList ,setMentorList] =useState([]) ;
  const { interest} = props;
  const { Web, App, Ml, Dl, Cp } = interest;
  // console.log("Card",interest) ;

  useEffect(()=>{
    axios({
      method: "get",
      url: "/api/allmentors",
      baseURL: process.env.REACT_APP_BACKEND_URL,
    })
    .then((res)=>{
      setMentorList(res.data.mentors) ;
      //console.log(res.data.mentors) ;
    })
    .catch((err)=>{
      console.log(err) ;
    })
  },[]) ;

  return (
    <div className="mentor">
      <Menu 
      DialogColor="DialogColorSuccess"
      buttonColor="success"
    />
      {Web && <WebDev mentorList={mentorList}/>}
      {Cp && <CompetitiveProgramming mentorList={mentorList}/>}
      {Ml && <MachineLearning mentorList={mentorList}/>}
      {Dl && <DeepLearning mentorList={mentorList} />}
      {App && <ApplicationDevop mentorList={mentorList} />}
    </div>
  );
};
export default Mentor;
