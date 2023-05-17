import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "./register.css";
import Menu from "../../../menu/menu";

const RegisterMentor = (props) => {
  const {setRegisterStatus}=props ;
  const [open, setOpen] = useState(false);
  const [Interest, setInterest] = useState({
    web: false,
    app: false,
    ml: false,
    dl: false,
    cp: false,
  });
  const [MentorData, setMentorData] = useState({
    Name: "",
    Email: "",
    Description: "",
    PhoneNumber: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState(null);
  const [submitFailMessage, setSubmitFailMessage] = useState(null);

  const updateInterest = (e) => {
    setInterest({
      ...Interest,
      [e.target.id]: e.target.checked,
    });
  };
  const updateMentorData = (e) => {
    setMentorData({
      ...MentorData,
      [e.target.name]: e.target.value,
    });
  };
  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    setOpen(true);
    e.preventDefault();
    let body = new FormData();
    body.set("key", process.env.REACT_APP_IMGBB_SECRET_KEY);
    body.append("image", selectedImage);
    axios({
      method: "post",
      url: "/1/upload",
      baseURL:process.env.REACT_APP_IMGBB_URL,
      data: body,
    })
      .then(function (response) {
        if (response.data.status === 200) {
          let ImgUrl = response.data.data.url;
          console.log(ImgUrl);
          axios({
            method: "post",
            url: "/api/register/mentor",
            baseURL: process.env.REACT_APP_BACKEND_URL,
            data: {
              name: MentorData.Name,
              email: MentorData.Email,
              description: MentorData.Description,
              phone: MentorData.PhoneNumber,
              imgSrc: ImgUrl,
              interest: Interest,
            },
          })
            .then((res) => {
              setSubmitSuccessMessage("SuccessFully added!");
              setSubmitFailMessage(null);
              console.log(res);
            })
            .catch((error) => {
              setSubmitSuccessMessage(null);
              setSubmitFailMessage("failed, Possibly your are already mentor or Prease try again");
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        setSubmitSuccessMessage(null);
        setSubmitFailMessage("failed, Possibly your are already mentor or Prease try again");
        console.log(error);
      });
    setOpen(false);
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
      {/* {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )} */}
      <div className="contact register">
        <div className="container registerContainer">
        <div className="register-title">Mentor Form</div>
          <div className="inputs">
            <form onSubmit={handleSubmit}>
              <label>NAME</label>
              <input
                type="text"
                placeholder="Name"
                value={MentorData.Name}
                onChange={updateMentorData}
                name="Name"
                required
              />
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={MentorData.Email}
                onChange={updateMentorData}
                name="Email"
                required
              />
              <label>DESCRIPTION</label>
              <input
                type="text"
                placeholder="description"
                value={MentorData.Description}
                onChange={updateMentorData}
                name="Description"
                required
              />
              <label>PHONE NUMBER</label>
              <input
                type="number"
                placeholder="8127392350"
                value={MentorData.honeNumber}
                onChange={updateMentorData}
                name="PhoneNumber"
                required
              />
              <label>PROFILE PHOTO</label>
              <input
                type="file"
                id="img"
                name="ProfileImg"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
              <label>Select Interest</label>
              <div className="interest-option">
                <div className="row">
                  <div className="col">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={Interest.web}
                            onChange={updateInterest}
                            id="web"
                          />
                        }
                        label="Web development"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={Interest.ml}
                            onChange={updateInterest}
                            id="ml"
                          />
                        }
                        label="Machine learning"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={Interest.cp}
                            onChange={updateInterest}
                            id="cp"
                          />
                        }
                        label="Competitive programming"
                      />
                    </FormGroup>
                  </div>
                  <div className="col">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={Interest.app}
                            onChange={updateInterest}
                            id="app"
                          />
                        }
                        label="App development"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={Interest.dl}
                            onChange={updateInterest}
                            id="dl"
                          />
                        }
                        label="Deep learning"
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
              <button type="submit" style={{ fontSize: "large" }}>
                Register as Mentor
              </button>
            </form>
            {submitSuccessMessage && (
              <div className="success-message">
                <p>{submitSuccessMessage}</p>
              </div>
            )}
            {submitFailMessage && (
              <div className="fail-message">
                <p>{submitFailMessage}</p>
              </div>
            )}
            <button type="submit" style={{ fontSize: "large" }} onClick={()=>{
              setRegisterStatus(false);
            }}>
                Back To Profile Page
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterMentor;
