import { GoogleLogin } from "react-google-login";
import './LoginPage.css'
import login_img from './login image.png' ;
import Menu from "../../../menu/menu";


const LoginPage = (props) =>{
    const {responseGoogle} =props ;
    return (
        
        <div className="LoginPage">
        <Menu DialogColor="DialogColorPrimary" buttonColor="primary" />
        <div className="container">
        <img src={login_img} alt=""></img>
        {/* <h1>Login with Google</h1> */}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          style ={{width:"10px"}}
        />
        </div>
        </div>
        
    )
}

export default LoginPage ;