import "./Success.css";
import Menu from '../../menu/menu'

const Success = () => {
  return (
    <div className="success">
    <Menu 
      DialogColor="DialogColorSuccess"
      buttonColor="success"
    />
     <div id="container">
      <div id="success-box">
        <div className="face">
          <div className="eye"></div>
          <div className="eye right"></div>
          <div className="mouth happy"></div>
        </div>
        <div className="shadow scale"></div>
        <div className="message">
          <h1 className="alert">Success!</h1>
          <p>Yay, Your message has been successfully received.</p>
        </div>
        <a className="button-box green" href="/">Continue</a>
      </div>
    </div>

    <footer>
      <p>
        made by
        <a href="https://my-portfolio-om.herokuapp.com/"> Om Prakash</a> ♡
      </p>
    </footer>
    </div>
  );
};

export default Success;
