import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Header from "../component/Header";
import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react';
import "../style.css";
import RaisedButton from "material-ui/RaisedButton";

class Login extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="loginBox">
        <h1>로그인</h1>
  
        <Form size='large'></Form>
          <h4>아이디</h4>
          <Message>
                 환자의 경우 휴대폰 번호를, 의사의 경우 이메일을 입력해주십시오.<br/>
          </Message>
          <br/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='아이디' />
          
          <h4>비밀번호</h4>
                <Message>
                 환자의 경우 휴대폰 번호 마지마 4자리를, 의사의 경우 사전에 설정한 비밀번호를 입력해주십시오.<br/>
                </Message>
                <br/>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='비밀번호'
                  type='password'
                />

          <br/><br/>
          <RaisedButton
            className="signUpHospitalSubmit"
            primary={true}
            type="submit"
            label="로그인"
          />
      </div>
  
    </div>
    );
  };
}

export default Login;

// <Link to="/signup">Sign Up</Link>