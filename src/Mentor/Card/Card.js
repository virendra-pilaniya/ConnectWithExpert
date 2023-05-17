import React,{useState} from "react";
import "./Card.css";
import {Link,useHistory} from "react-router-dom" ;


const Card = (props) => {
  const { id,imgSrc, name, description } = props;
  const [hoverStatus, sethoverStatus] = useState(false);
  let history = useHistory();
  const handleConnect = (event) => {
    event.preventDefault();
    history.push("/contact");
    localStorage.setItem("mentorId", JSON.stringify(id));
  };
  const handleMouseOver =()=>{
    sethoverStatus(true);
    // console.log("hovering me") ;
  }
  const handleMouseOut=()=>{
    sethoverStatus(false) ;
    // console.log("hovering end") ;
  }
  return (
    <div className="col-lg-3 col-sm-4 col-6" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="cards" onClick={handleConnect}>
        <div className="image" >
          <img src={imgSrc} alt="MentorImage" />
        </div>
        <div className="title">
          <h2>{name}</h2>
        </div>
        <div className="description">
          {!hoverStatus &&(<p>{description}</p>)}
          {hoverStatus &&(<button><Link to="/contact" style={{ textDecoration: 'none' }}>Connect</Link></button>)}
        </div>
      </div>
    </div>
  );
};
export default Card;
