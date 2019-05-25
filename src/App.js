import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNTe6vOmrhQXa8JJm8ldVKhMwD6Kb29sQ",
    authDomain: "bloc-chat-23rc.firebaseapp.com",
    databaseURL: "https://bloc-chat-23rc.firebaseio.com",
    projectId: "bloc-chat-23rc",
    storageBucket: "bloc-chat-23rc.appspot.com",
    messagingSenderId: "905975327068"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
       activeRoom: ''
     }
     this.selectRoom=this.selectRoom.bind(this)
     this.setUser=this.setUser.bind(this)
  }
  selectRoom(room) {
    this.setState({activeRoom:room})
    console.log(room);
  }

  setUser(user) {
    this.setState({ user: user })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chats</h1>
        </header>
        <RoomList firebase={firebase} selectRoom= {this.selectRoom}/>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
        <User firebase={firebase} setUser={this.setUser} user={this.state.user} displayName={this.state.user} />
      </div>
    );
  }
}

export default App;
