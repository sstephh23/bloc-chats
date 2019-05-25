import React, { Component } from 'react';

class User extends Component {
   constructor(props) {
     super(props);

     this.state = {
      user: []
     };
   }

   componentDidMount () {
     this.props.firebase.auth().onAuthStateChanged( user => {
       this.props.setUser(user);
     });
   }

    signInWithPopup() {
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup(provider);
    }

   signOut() {
     this.props.firebase.auth().signOut();
   }

   render() {
     return (
      <section className='user'>
      <div> {this.props.user ? this.props.user.displayName : "Guest"}</div>
        <button onClick= {(e) =>  this.signInWithPopup() }>Google Sign-in </button>
        <button onClick= {(e) => this.signOut() }>Google Sign-out</button>
     </section>

     )
   }
}
export default User;
