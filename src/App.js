import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


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
  }
  selectRoom(room) {
    this.setState({activeRoom:room})
    console.log(room);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chats</h1>
        </header>
        <RoomList firebase={firebase} selectRoom= {this.selectRoom}/>
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
      </div>
    );
  }
}

export default App;
