import "./Contact.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../menu/menu.js";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Contact = (props) => {
  const { loginData } = props;
  const [email, setEmail] = useState();
  const [open, setOpen] = useState(false);
  const [Subject, setSubject] = useState("Regarding for contact");
  const [Message, setMessage] = useState();
  const [mentorId, setMentorId] = useState(null);
  useEffect(() => {
    setEmail(loginData.Email);
  }, [loginData]);

  let data = JSON.parse(localStorage.getItem("mentorId"));
  useEffect(() => {
    if (data) {
      setMentorId(data);
    }
    else {
       setMentorId(null);
    } // eslint-disable-next-line
  }, [data]);

  // function filterById(jsonObject, id) {
  //   return jsonObject.filter(function (jsonObject) {
  //     return jsonObject["id"] === id;
  //   })[0];
  // }

  const [selectedMentor, setSelectedMentor] = useState([]);
  useEffect(() => {
    if (mentorId) {
      axios({
        method: "get",
        url: `api/mentor/${mentorId}`,
        baseURL: process.env.REACT_APP_BACKEND_URL,
      })
        .then((res) => {
          setSelectedMentor(res.data.mentor);
          //console.log(res.data.mentors) ;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [mentorId]);

  let history = useHistory();
  const handleSubmit = (event) => {
    setOpen(true);
    event.preventDefault();
    axios
      .post("https://connectwithexpert-backend.herokuapp.com/sendMail", {
        from: "connectwithexpert21@gmail.com",
        to: selectedMentor.email,
        cc: "connectwithexpert21@gmail.com",
        subject: Subject,
        message: Message,
        Name: loginData.Name,
        Branch: loginData.Branch,
        Roll: loginData.RollNumber,
        Email: email,
      })
      .then(function (response) {
        if (response) {
          history.push("/contact/success");
        } else {
          history.push("/contact/failure");
        }
        setOpen(false);
      })
      .catch(function (error) {
        history.push("/contact/failure");
        console.log(error);
        setOpen(false);
      });
  };
  const handelChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const handelChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <Menu DialogColor="DialogColorPrimary" buttonColor="primary" />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress size={54} thickness={4} color="primary" />
      </Backdrop>
      <div className="contact">
        <div className="container speciallyForContact">
          <div className="brand-logo">
            <img src={selectedMentor.imgSrc} alt="MentorImage" />
          </div>
          <div className="brand-title">{selectedMentor.name}</div>
          <div className="inputs">
            <form onSubmit={handleSubmit}>
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handelChangeEmail}
                required
              />
              <label>SUBJECT</label>
              <input
                type="Subject"
                placeholder="Subject"
                value={Subject}
                onChange={handelChangeSubject}
                required
              />
              <label>YOUR MESSAGE</label>
              <textarea
                name=""
                type="text"
                id=""
                cols="30"
                rows="10"
                placeholder="message"
                value={Message}
                onChange={handelChangeMessage}
                required
              ></textarea>
              <button type="submit" style={{ fontSize: "large" }}>
                SEND
              </button>
            </form>
          </div>
        </div>
        <a
          href={"https://wa.me/+91" + selectedMentor.phone}
          className="whatsapp_float"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
