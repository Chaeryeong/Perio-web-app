import React, {Component} from "react";
import logo from "./perio_logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import SignUpContainer from "./SignUpContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUpHospital from "./SignUpHospital";
import SignUpDoctor from "./SignUpDoctor";
import { Route} from 'react-router-dom';
import SignUpForm from "./SignUpForm";



function App() { // 상태나 기능 표시하도록
  return ( 
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
  );
}

export default App;
