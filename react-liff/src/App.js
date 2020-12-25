import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import logo from './assets/yellow.png';
import { 
  Col,
  Button, 
  Form, 
  FormGroup, 
  Container, 
  ModalHeader, 
  ModalBody,
  ModalFooter, 
  Modal, 
  Input, 
  InputGroup,
  Label
 } from "reactstrap";
import Datetime from "react-datetime";

const liff = window.liff;

class App extends Component {
  constructor(props) {
    super(props);
    this.saveUser = this.saveUser.bind(this)
    this.closeModal = this.closeModal.bind(this, false);
    this.showModal = this.showModal.bind(this, false);
    this.check = this.check.bind(this, false);
    this.state = {
      validated: false,
      showModal: false,
      user: {
        name: '',
        email: '',
        userLineID: '',
        pictureUrl: '',
        statusMessage: ''
      }
    };
  }

  getProfile() {
    let serializedState = localStorage.getItem('user');
    if(serializedState){
      this.user = JSON.parse(serializedState);
      this.setState({user: this.user});
    }

    console.log('user : ', this.user);
    if(!this.user){
      liff.init({ liffId: "1655424183-wzDgvLRj" } ,async () => {
        if (liff.isLoggedIn()) {
          let userProfile = await liff.getProfile();
          let idToken = await liff.getDecodedIDToken();
          this.setState({
            user : {
              name: userProfile.displayName,
              email: idToken.email,
              userLineID: userProfile.userId,
              pictureUrl: userProfile.pictureUrl,
              statusMessage: userProfile.statusMessage
            }
          });
          console.log('liff done : ', this.state.user);
        } else {
          liff.login();
        }
      });
    }
  }

  check(){
    this.setState({validated: !this.state.validated})
  }


  closeModal(){
    this.setState({showModal: false})
  }

  showModal(){
    this.setState({showModal: true})
  }

  saveUser = async () =>{
    try{
      // POST request using fetch with async/await
    console.log('state : ',this.state);
    var user = JSON.stringify(this.state.user)
    console.log('user state : ',user);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: user
    };
    const response = await fetch('/api/user', requestOptions);
    // const data = await response.json();
    // console.log('response : ',data);
    
    let serializedState = JSON.stringify(this.state.user);
    localStorage.setItem('user', serializedState);
    this.setState({isLoggedIn: true});
    }catch (e){
      console.log('exception : ',e);
    }
    
  }

  componentDidMount() {
    this.getProfile()
    //this.getList()
  }

  render(){
    if(this.state.isLoggedIn){
      return(
        <div>
          <HomePage/>
        </div>
      );
    }
    else{
      return (
        <div className="App"> 
          <Modal isOpen={this.state.showModal} fade={false}>
            <ModalHeader style={{fontWeight: "bold"}}>ข้อตกลงและเงื่อนไข</ModalHeader>
            <ModalBody>
              <p>
              ก่อนที่ท่านจะตกลงสมัครเป็นผู้ใช้บริการในเว็บไซต์นี้
              ท่านจำเป็นต้องอ่านและยอมรับเงื่อนไขทุกประการตามข้อตกลงนี้

              และตามนโยบายข้อมูลส่วนบุคคลของบริษัท
              ก่อนที่ท่านจะตกลงสมัครเป็นผู้ใช้บริการในเว็บไซต์นี้

              ท่านจำเป็นต้องอ่านและยอมรับเงื่อนไขทุกประการตามข้อตกลงนี้
              และตามนโยบายข้อมูลส่วนบุคคลของบริษัท
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.closeModal}>ตกลง</Button>
            </ModalFooter>
          </Modal>

            {
              (this.state.user && this.state.user.userLineID) ?
              <Container>
                {
                  (this.state.user && this.state.user.pictureUrl && this.state.user.pictureUrl !== '') ?
                  <div className="profile">
                    <div className="photo-container">
                    <img alt="..." src={this.state.user.pictureUrl}></img>
                    </div>
                  </div>
                  :
                  null
                }
                <h3 className="title">สวัสดี</h3>
                <h5>{this.state.user.name}</h5>
                <div className="divider"></div>
                <div className="content">
                <h3>ยินดีต้อนรับเข้าสู่ระบบ</h3>
                <Form action="" className="form" method="">
                  <h5>กรุณาให้ข้อมูลเพื่อรับสิทธิพิเศษต่างๆ</h5>
                  <FormGroup>
                    <div className="center-input">
                      <InputGroup>
                        <Input
                          placeholder="เบอร์โทรศัพธ์"
                          type="text"
                        ></Input>
                      </InputGroup>
                      <Datetime timeFormat={false} inputProps={{ placeholder: "วัน เดือน ปีเกิด" }}/>
                    </div>
                    
                  </FormGroup>

                  <div className="bottom">
                  <Label>
                        <Input type="checkbox" onChange={this.check} value={this.state.validated}></Input>
                        <span className="form-check-sign"></span>
                        <Button onClick={this.showModal} color="link">ยอมรับข้อตกลงและเงื่อนไข</Button>
                  </Label>
                  <div>
                  <img className="logo" alt="logo" src={logo}></img>
                  </div>

                  <Button disabled={!this.state.validated} onClick={this.saveUser} style={{color: "#636363",backgroundColor: this.state.validated ? "#f5d80f" : "#c4c4c4"}} className="btn-login">
                      เข้าสู่ระบบ
                  </Button>
                  </div>
                  
                </Form>
                </div>
              </Container>
              :
              <div className="loading-center"></div>
            }
        </div>
      );
    }
  }
}

export default App;
