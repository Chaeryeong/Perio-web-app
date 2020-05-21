import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./style.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SignUpDoctor = ({

}) => {
  return (
  <div>
    
    <div className="loginBox">    
      <h1>의사 등록</h1>

      <h3>* 항목은 필수 항목입니다</h3>
      <br/>

      <form>
        <h4>이름*</h4>
        <TextField
          name="doctor_name"
          floatingLabelText="이름"
        />
        <br /><br />

        <h4>비밀번호*</h4>
        <TextField
          name="doctor_pw"
          floatingLabelText="비밀번호"
        />
        <br /><br />

        <h4>비밀번호 확인*</h4>
        <TextField
          name="doctor_pwconfirm"
          floatingLabelText="비밀번호 확인"
        />
        <br /><br />

        <h4>소속 병원*</h4>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={"korea"}>고려대 치과</MenuItem>
          <MenuItem value={"seoul"}>서울대 치과</MenuItem>
        </Select>
        <br /><br />

        <h4>이메일*</h4>
        <TextField
          name="doctor_email"
          floatingLabelText="아이디로 사용하실 이메일을 입력해주세요"
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

export default SignUpDoctor;
