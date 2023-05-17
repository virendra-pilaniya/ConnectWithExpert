import React, { useEffect, useState } from "react";
import LoginPage from "./Component/LoginPage/LoginPage";
import ProfilePage from "./Component/ProfilePage/ProfilePage";
import RegisterMentor from "./Component/MentorRegistor/registerRender";

const AuthForRegister = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    url: "",
  });
  const [loginStatus, setLoginStatus] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("UserGoogleData"));
    if (data) {
      setProfileData({
        name: data.profileObj.name,
        email: data.profileObj.email,
        url: data.profileObj.imageUrl,
      });
      setLoginStatus(true);
    } // eslint-disable-next-line
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
    setProfileData({
      name: response.profileObj.name,
      email: response.profileObj.email,
      url: response.profileObj.imageUrl,
    });
    localStorage.setItem("UserGoogleData", JSON.stringify(response));
    setLoginStatus(true);
  };
  const logout = () => {
    console.log("logout");
    localStorage.removeItem("UserGoogleData");
    setLoginStatus(false);
  };
  const handleBecomeMentor = () => {
    setRegisterStatus(true);
  };
  return (
    <div className="AuthforRegisterDiv">
      {!registerStatus && !loginStatus && (
        <LoginPage responseGoogle={responseGoogle} />
      )}
      {!registerStatus && loginStatus && (
        <ProfilePage
          logout={logout}
          handleBecomeMentor={handleBecomeMentor}
          name={profileData.name}
          email={profileData.email}
          url={profileData.url}
        />
      )}
      {registerStatus && (
        <div>
          <RegisterMentor setRegisterStatus={setRegisterStatus} />
        </div>
      )}
    </div>
  );
};

export default AuthForRegister;
