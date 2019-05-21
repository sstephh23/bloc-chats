import React, { Component } from 'react';

class User extends Component {
   constructor(props) {
     super(props);

     this.state = {
      user: ''
     };
     const provider = new this.props.firebase.auth.GoogleAuthProvider();
   }

  componentDidMount () {
    this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
    });
  }

   signInWithPopup() {
     firebase.auth().signInWithPopup(provider).then(function(result) {
       var token = result.credential.accessToken;
       var user = result.user;
     }).catch(function(error) {
         var errorCode = error.code;
         var errorMessage = error.message;
         var email = error.email;
         var credential = error.credential;
     });
   }

   signOut() {
     firebase.auth().signOut().then(function() {
     }).catch(function(error) {
     });
   }

   render() {
     return (
     <section className='signin'>
       <button  onClick= { (e) => this.props.firebase.auth().signInWithPopup( provider ); } onSetUser= {this.props.setUser(name)} >{this.props.user.displayName}</button>
       <button  onClick= { (e) => this.props.firebase.auth().signOut(); }></button>

     )
   }
}
