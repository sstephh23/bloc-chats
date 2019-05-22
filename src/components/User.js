import React, { Component } from 'react';

class User extends Component {
   constructor(props) {
     super(props);

     this.state = {
      user: []
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
     <section className='user' >
     { this.state.user.map((name,index) =>

     <div key={index} onClick= {(e) => this.props.setUser(e)}>{this.props.user.displayName}</div>
      )
     }
     <form>
       <button  type="submit" onClick= { (e) => this.props.firebase.auth().signInWithPopup( provider ); }></button>
       <button  type="submit" onClick= { (e) => this.props.firebase.auth().signOut(); }></button>
     </form>
     </section>

     )
   }
}
