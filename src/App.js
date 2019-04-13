import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';


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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
