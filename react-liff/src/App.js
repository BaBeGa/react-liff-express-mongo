import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import { Button } from 'react-bootstrap';

const liff = window.liff;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.saveUser = this.saveUser.bind(this)
    this.state = {
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
    const data = await response.json();
    console.log('response : ',data);
    
    let serializedState = JSON.stringify(this.state.user);
    localStorage.setItem('user', serializedState);
    }catch (e){
      console.log('exception : ',e);
    }
    
  }

  componentDidMount() {
    this.getProfile()
    //this.getList()
  }

  render(){
    if(this.user){
      return(
        <div>
          <HomePage/>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <div className="support">
              {
                (this.state.user && this.state.user.pictureUrl && this.state.user.pictureUrl !== '')
                  ?
                  <img width="25%" src={this.state.user.pictureUrl} />
                  :
                  <p>pictureUrl = null</p>
              }
          </div>
          <div className="userData">
            {
              (this.state.user && this.state.user.name && this.state.user.name !== '')
                ?
                <p>Name: {this.state.user.name}</p>
                :
                <p>Name = null</p>
            }
            {
              (this.state.user && this.state.user.email && this.state.user.email !== '')
                ?
                <p>e-mail: {this.state.user.email}</p>
                :
                <p>email = null</p>
            }
            {
              ( this.state.user && this.state.user.userLineID && this.state.user.userLineID !== '')
                ?
                <p>LineID: {this.state.user.userLineID}</p>
                :
                <p>LineID = null</p>
            }
            {
              (this.state.user && this.state.user.statusMessage && this.state.user.statusMessage !== '')
                ?
                <p>statusMessage: {this.state.user.statusMessage}</p>
                :
                <p>statusMessage = null</p>
            }
            </div>
            <div className="button login">
              <Button onClick={this.saveUser} variant="warning" size="lg">Register</Button>
            </div>
        </div>
      );
    }
  }
}

export default App;
