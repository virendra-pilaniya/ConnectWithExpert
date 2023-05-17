import Menu from '../menu/menu'

const Success = () => {
  return (
    <div className="success">
    <Menu 
      DialogColor="DialogColorFail"
      buttonColor="warning"
    />
     

    <div id="container">
        <div id="error-box">
            <div className="face2">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth sad"></div>
            </div>
            <div className="shadow move"></div>
            <div className="message">
            <h1 className="alert">Error!</h1><p>Oh no, Something went wrong.</p>
            </div>
          <a className="button-box red" href="/contact">Try again</a>
          </div>
        </div>
    
        
      
      <footer>
        <p>made by <a href="https://my-portfolio-om.herokuapp.com/"> Om Prakash</a> ♡</p>
      </footer>


    </div>
  );
};

export default Success;
