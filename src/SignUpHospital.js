import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./style.css";


const SignUpHospital = ({

}) => {
  return (
  <div>
    
    <div className="loginBox">
      <h1>병원 등록</h1>

      <h3>* 항목은 필수 항목입니다</h3>
      <br/>

      <form>
        <h4>병원명*</h4>
        <TextField
          name="hospital_name"
          floatingLabelText="병원명"
        />
        <br /><br />

        <h4>병원 웹사이트 URL</h4>
        <TextField
          name="hospital_url"
          floatingLabelText="url"
        />
        <br /><br />

        <RaisedButton
          className="signUpHospitalSubmit"
          primary={true}
          type="submit"
          label="등록하기"
        />
      </form>
    </div>

  </div>
  );
};

export default SignUpHospital;
