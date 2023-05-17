import { Button } from "@mui/material";
import { GoogleLogout } from "react-google-login";
import Menu from "../../../menu/menu";
import "./ProfilePage.css";

const ProfilePage = (props) => {
  const { logout, handleBecomeMentor, name, email, url } = props;
  return (
    <div className="ProfilePageBody">
       <Menu DialogColor="DialogColorPrimary" buttonColor="primary" />
      <div class="shadow overflow">
        <div id="header"></div>
        <div id="profile">
          <div class="image">
            <img src={url} alt="proile_photo" />
          </div>
          <div class="name">{name}</div>
          <div class="nickname">{email}</div>
          <div className="button-container">
            <div className="left">
              <Button variant="contained" onClick={handleBecomeMentor} style={{textTransform: 'none'}} size="large">Become a Mentor</Button>
            </div>
            <div className="right">
              <GoogleLogout
                clientId="723367763263-7re86nibartjbnf21rhhkqbcr222fda2.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
