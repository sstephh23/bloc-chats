import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';


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
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chats</h1>
        </header>
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
