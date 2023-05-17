import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const LoginForm = (props) => {
  const { loginData, Interest, handleSubmit, updateLoginData, updateInterest } =
    props;
  const { Name, Branch, RollNumber, Email } = loginData;
  const { Web, Ml, Dl, App, Cp } = Interest;
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title text-center mb-4">Connect with Expert</h1>
      <div className="form-group position-relative">
        <label className="d-block">
          <i className="icon" data-feather="user"></i>
        </label>
        <input
          type="text"
          id="formName"
          className="form-control form-control-lg thick"
          placeholder="Name"
          onChange={updateLoginData}
          name="Name"
          value={Name}
          required
        />
      </div>

      <div className="form-group position-relative">
        <label className="d-block">
          <i className="icon" data-feather="user"></i>
        </label>
        <input
          type="text"
          id="formBranch"
          className="form-control form-control-lg thick"
          placeholder="Branch"
          onChange={updateLoginData}
          name="Branch"
          value={Branch}
          required
        />
      </div>

      <div className="form-group position-relative">
        <label className="d-block">
          <i className="icon" data-feather="user"></i>
        </label>
        <input
          type="number"
          id="formRoll"
          className="form-control form-control-lg thick"
          placeholder="Roll number"
          onChange={updateLoginData}
          name="RollNumber"
          value={RollNumber}
          required
        />
      </div>

      <div className="form-group position-relative">
        <label className="d-block">
          <i className="icon" data-feather="mail"></i>
        </label>
        <input
          type="email"
          id="formEmail"
          className="form-control form-control-lg thick"
          placeholder="E-mail"
          onChange={updateLoginData}
          name="Email"
          value={Email}
          required
        />
      </div>

      <div className="form-group interest">
        <div className="interest-option">
          <p>Select Interest</p>
          <div className="row">
            <div className="col">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Web}
                      onChange={updateInterest}
                      id="Web"
                    />
                  }
                  label="Web development"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={Ml} onChange={updateInterest} id="Ml" />
                  }
                  label="Machine learning"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={Cp} onChange={updateInterest} id="Cp" />
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
                      checked={App}
                      onChange={updateInterest}
                      id="App"
                    />
                  }
                  label="App development"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={Dl} onChange={updateInterest} id="Dl" />
                  }
                  label="Deep learning"
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary" tabIndex="-1">
          SUBMIT 
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
