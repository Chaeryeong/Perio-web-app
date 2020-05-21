import React, { Component } from 'react';
import Header from "../component/Header"; 
import Footer from "../component/Footer"; 
import Login from './Login';
import {Container, Divider,Dropdown,Grid,Image,List,Menu,Segment} from 'semantic-ui-react'
import { Router } from 'react-router-dom';
import Link from 'react-router'; //link

const Main = () => (
  <div>
    <Header />
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a'>로그인</Menu.Item> <tab/>
        <Menu.Item as='a'>등록 </Menu.Item><tab/>
        <Menu.Item as='a'>관리자</Menu.Item> 
      </Container>
    </Menu>
​
    <Container text style={{ marginTop: '7em' }}>
        <h2>PERIO 치주질환 진단 앱 메인</h2>
    </Container>
​
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        
        <Divider inverted section />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item> <tab/>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item> <tab/>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item> <tab/>
        </List>
      </Container>
    </Segment>
  </div>
) 
export default Main;