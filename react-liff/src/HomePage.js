import{ Component } from 'react';
import './HomePage.css';

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this)
        this. state = {
          user: {
            name: '',
            email: '',
            userLineID: '',
            pictureUrl: '',
            statusMessage: '',
            coupons:[]
          }
      };
    }

    //to get userData and display on home page
    getUser = () => {
      try{
        let serializedState = localStorage.getItem('user');
        if(serializedState){
          this.user = JSON.parse(serializedState);
          this.setState({user: this.user});
        }
        console.log('state : ', this.state);
        console.log('user local : ', this.user);
        fetch('/api/user/'+this.user.userLineID)
        .then(res => res.json())
        .then(user => { console.log('getuser' , user );  this.setState({ user : user })})
      }catch (e){
        console.log('exception : ', e);
      }
    }

    // getUser(){
    //     let serializedState = localStorage.getItem('user');
    //     if(serializedState){
    //     this.user = JSON.parse(serializedState);
    //     }
    //     console.log('getuser: ', this.user);
    //     this.setState({user : this.user});
    // }

    componentDidMount() {
        this.getUser()
    }

    render(){
        return (
        <div className="App">
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
              {
                this.state.user.coupons.map((value, index) => {
                  return <p key={index}> details: {value.details}, status : {value.status}</p>
                })
              }

              </div>
        </div>
        );
      }
}

export default HomePage;