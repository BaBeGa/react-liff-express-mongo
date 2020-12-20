import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';

const liff = window.liff;

class App extends Component {
  constructor(props) {
    super(props);
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


  getList = () => {
    
    fetch('/api/user')
    .then(res => res.json())
    .then(user => { console.log('getlist' , user);  this.setState({ user : user })})
  }

  getProfile() {
    let serializedState = localStorage.getItem('user');
    if(serializedState){
      this.user = JSON.parse(serializedState);
    }

    this.setState({user: this.user});
    console.log('user : ', this.user);
    // if(!this.user){
    //   liff.init({ liffId: "1655424183-wzDgvLRj" } ,async () => {
    //     if (liff.isLoggedIn()) {
    //       let userProfile = await liff.getProfile();
    //       let idToken = await liff.getDecodedIDToken();
    //       this.setState({
    //         user : {
    //           name: userProfile.displayName,
    //           email: idToken.email,
    //           userLineID: userProfile.userId,
    //           pictureUrl: userProfile.pictureUrl,
    //           statusMessage: userProfile.statusMessage
    //         }
    //       });
  
    //       this.saveUser();
    //     } else {
    //       liff.login();
    //     }
    //   });
    // }
  }

  saveUser(){
    let serializedState = JSON.stringify(this.state.user);
    localStorage.setItem('user', serializedState);
  }

  componentDidMount() {
    this.getProfile()
    this.getList()
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
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div className="support">
              {
                (this.state.user.pictureUrl && this.state.user.pictureUrl !== '')
                  ?
                  <img width="25%" src={this.state.user.pictureUrl} />
                  :
                  <p>pictureUrl = null</p>
              }
          </div>
          <div className="userData">
            {
              (this.state.user.name && this.state.user.name !== '')
                ?
                <p>Name: {this.state.user.name}</p>
                :
                <p>Name = null</p>
            }
            {
              (this.state.user.email && this.state.user.email !== '')
                ?
                <p>e-mail: {this.state.user.email}</p>
                :
                <p>email = null</p>
            }
            {
              (this.state.user.userLineID && this.state.user.userLineID !== '')
                ?
                <p>LineID: {this.state.user.userLineID}</p>
                :
                <p>LineID = null</p>
            }
            {
              (this.state.user.statusMessage && this.state.user.statusMessage !== '')
                ?
                <p>statusMessage: {this.state.user.statusMessage}</p>
                :
                <p>statusMessage = null</p>
            }
            </div>
        </div>
      );
    }
  }
}

export default App;
