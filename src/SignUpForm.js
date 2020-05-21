import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PasswordStr from "./PasswordStr";
import "./style.css";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ReactDatePicker from "react-date-picker";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange,
}) => {
  return (
  <div>
    
    <div className="loginBox">
      <h1>환자 등록</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <h3>* 항목은 필수 항목입니다</h3>
      <br/>

      <form onSubmit={onSubmit}>
        <h4>이름*</h4>
        <TextField
          name="username"
          floatingLabelText="이름"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />
        <br /><br />

        <h4>휴대폰 번호*</h4>
        <TextField
          name="phone"
          floatingLabelText="휴대폰 번호 (숫자만 입력하십시오.)"
          value={user.phone}
          onChange={onChange}
          errorText={errors.phone}
        />
        <br /><br />

        <h4>휴대폰 번호 끝 4자리*</h4>
        <TextField
          type={type}
          name="password"
          floatingLabelText="휴대폰 번호 끝 4자리"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />
        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <FlatButton
                className="pwShowHideBtn"
                label={btnTxt}
                onClick={pwMask}
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          )}
        </div>
        <br /><br />

        <h4>휴대폰 번호 끝 4자리 확인*</h4>
        <TextField
          type={type}
          name="pwconfirm"
          floatingLabelText="휴대폰 번호 끝 4자리 확인"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
        <br /><br />

        <h4>성별*</h4>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          //onChange={handleChange}
        >
          <MenuItem value={"female"}>여</MenuItem>
          <MenuItem value={"male"}>남</MenuItem>
        </Select>
        <br /><br />

        <h4>생년월일*</h4>
        <div>
          <ReactDatePicker
            // onChange={this.handleLog}
            range={[1930, 2020]}
            //value={this.state.selectedDate}
            //disabled={true}
          />
        </div>
        <br /><br />

        <h4>다니시는 치과*</h4>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          //onChange={handleChange}
        >
          <MenuItem value={"korea"}>고려대 치과</MenuItem>
          <MenuItem value={"seoul"}>서울대 치과</MenuItem>
        </Select>
        <br /><br />

        <h4>이메일 주소</h4>
        <TextField
          name="email"
          floatingLabelText="이메일 주소 (비워두셔도 됩니다)"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        <br /><br />

        <h4>차트 번호</h4>
        <TextField
          name="chart_no"
          floatingLabelText="차트 번호 (비워두셔도 됩니다)"
          value={user.chart_no}
          onChange={onChange}
          errorText={errors.chart_no}
        />
        <br /><br />
        
        <h4>담당의 이름</h4>
        <TextField
          name="doctor_incharge_name"
          floatingLabelText="담당의 이름 (비워두셔도 됩니다)"
          value={user.doctor_incharge_name}
          onChange={onChange}
          errorText={errors.doctor_incharge_name}
        />
        <br />
        <br />
        <br />

        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="등록하기"
        />
      </form>
    </div>

   
  </div>
  );
};

export default SignUpForm;
